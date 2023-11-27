const { exec } = require('child_process');

class OpenVPNConnector {
    constructor(configFile) {
        this.configFile = configFile;
        this.credentialsFile = credentialsFile;
        this.openvpnProcess;
    }

    connect() {
        this.openvpnProcess = exec(`openvpn --config ${this.configFile} --auth-user-pass ${credentialsFile}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`Stderr: ${stderr}`);
                return;
            }
            console.log(`OpenVPN stdout: ${stdout}`);
        });

        this.openvpnProcess.stdout.on('data', (data) => {
            console.log(`OpenVPN data: ${data}`);
        });

        this.openvpnProcess.on('close', (code) => {
            console.log(`OpenVPN process exited with code ${code}`);
        });

        this.openvpnProcess.on('error', (err) => {
            console.error(`OpenVPN process error: ${err}`);
        });
    }

    disconnect() {
        if (this.openvpnProcess) {
            this.openvpnProcess.kill('SIGINT'); // Sending SIGINT signal to terminate the process
            this.openvpnProcess = null;
        } else {
            console.log('OpenVPN process is not running.');
        }
    }
}

module.exports = OpenVPNConnector;
