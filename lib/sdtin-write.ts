import { ChildProcess } from "child_process";

/**
 * Write the stdin into the child process
 * @param proc Child process refrence
 * @param stdin stdin string
 */
export function writeToStdin(proc: ChildProcess, stdin: string): void {
    if (stdin) {
        proc.stdin.write(stdin + '\r\n', err => {
            if(!err)
                proc.stdin.end();
        });
        proc.stdin.on("error", function (err) {
            // Ignore input if stream is already closed
            return;
        });
    }
}