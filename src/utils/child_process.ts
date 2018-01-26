import * as childProcess from 'child_process'

export class RunSh {
    
    private address : string
    private task : childProcess.ChildProcess;
    
    constructor( address : string ) {
        this.address = address
    }
    
    do_run() : void {
        this.task = childProcess.spawn( this.address )
        this.task.stdout.on( 'data' , (data : any) => console.log( data ))
        this.task.stderr.on( 'data' , (data : any) => console.log( data ))
        this.task.on( 'exit' , (code : any, signal : string) => console.log('child process eixt ,exit:' + code ))
    }
}
