import { Store } from '../utils/store'
import { removeAndRearrangeTask } from '../core/task'
import { ARCHIVE_DATABASE, DEFAULT_DATABASE, DEFAULT_TODO_STATUS_GROUP } from '../utils/constants'
import * as commander from 'commander'
import * as inquirer from 'inquirer'
import { TodoItem } from '../types'
import Chalk from 'chalk'
import {run_sh} from '../utils/child_process'
const store = new Store(DEFAULT_DATABASE)

commander
  .parse(process.argv)

const index = commander.args && commander.args.length && commander.args[0]
const questions = [{
  type: 'input',
  name: 'note',
  message: 'Do you have any notes? ',
  suffix: '(enter "done" and done)',
}]
;(async() => {
  if (!index) return console.log(`commander [todo do] need task id, like: [todo do 1]\n`)
  const task: TodoItem = await store.findOne({ index: +index })
  if (!task || !task._id) return console.log(`not found task ${index}!\n`)
  if (task.level == 'exe') {
    const task_sh = new run_sh(task.description)
    task_sh.do_run()
  }
  
  // show task status
  const text = task.status !== DEFAULT_TODO_STATUS_GROUP.solved ? `⚬` : '●'
  const color = task.status === DEFAULT_TODO_STATUS_GROUP.solved ? '#00CD00' : '#E79627'
  console.log(`TASK ${index} is ${Chalk.hex(color)(task.status)}.`)
  console.log(`${text} ${task.title}`)
  console.log(' ')
  
  // is over task
  if (task.status === DEFAULT_TODO_STATUS_GROUP.solved) return process.exit(1)
  
  // show task notes
  const { note } = await inquirer.prompt(questions)
  // append note
  if (note !== 'done') {
    task.notes = task.notes && task.notes.length ? [...task.notes, note] : [note]
    task.status = DEFAULT_TODO_STATUS_GROUP.solving
    await store.update({ index: +index }, task)
    return console.log(`TASK ${index} updated!\n`)
  }
  
  // will be solved
  const next = Object.assign({}, task, { status: DEFAULT_TODO_STATUS_GROUP.solved })
  await removeAndRearrangeTask(next._id)
  // move current task to archive database
  await new Store(ARCHIVE_DATABASE).save(next)
  return console.log(`TASK ${index} has been ${Chalk.hex('#00CD00')('solved')}.\n`)
  
})()
