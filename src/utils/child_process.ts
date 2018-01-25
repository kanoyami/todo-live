import * as childProcess from 'child_process'

export class run_sh{
    private address : string
    private task : childProcess.ChildProcess;
    constructor(address : string){
        this.address = address
    }
    public do_run() : void {
        this.task = childProcess.spawn(this.address)
        this.task.stdout.on('data', function (data : any) { 
            console.log('standard output:\n' + data)
            });
        this.task.stderr.on('data', function (data : any) { 
            console.log('standard error output:\n' + data)
            });
        this.task.on('exit', function (code : any, signal : string) { 
            console.log('child process eixt ,exit:' + code)
            });
    }
}
