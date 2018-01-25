In this forked, todo-live allow user to chose an executable task by using bash.
### Usage
When you are choosing which type of task you want do,you can chose `exe`.Then enter the command in desctription.
If you use `todo do` ,the command you entered will execute

<br>
<div align="center" height="500">
<img src="logo.png" width="460" height="260" align="center">
</div>

<br><br><br>

### todo-live

> a todo list manager in  command line.

`todo-live` helps you build a simple list of tasks, you can change the state of the task and add notes. For developers, dealing with a task in a command line can help you to focus your attention.

### Install

`todo-live` required NodeJS. use npm installation:

```
npm i -g todo-live
```

### Usage

- use alias (optional)

  `alias t='todo'`

- add a task (add / a)

  `todo add` / `todo a`

  <img src=".github/examples/add.png">

- show tasks (show / s)

  `todo show` / `todo show {index}` / `todo s`

  <details>
    <summary><b>preview</b> </summary>
    <img src=".github/examples/show-1.png">
    <img src=".github/examples/show-2.png">
  </details>

- solve a task, you can also take notes.

  `todo do {index}`
  <details>
    <summary><b>preview</b> </summary>
    <img src=".github/examples/do-1.png">
  </details>

- remove a task

  `todo rm {index}`

  <details>
    <summary><b>preview</b> </summary>
    <img src=".github/examples/rm.png">
  </details>
  
- show task histroy

  `todo log`

  <details>
    <summary><b>preview</b> </summary>
    <img src=".github/examples/log.png">
  </details>
  
  ### About
  if you have any ideas and suggestions, please tell me [here](https://github.com/DhyanaChina/todo-live/issues/new).
  
  ### LICENSE
  **MIT**
  
