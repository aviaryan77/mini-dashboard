let debug;

const env = process.env.NODE_ENV

if (true) {
	debug = {
		logs: env === 'development',
	};
} else {
	debug = {
		logs: false,
	};
}

const logs = debug?.logs;

const MAX_PATH_LENGTH = 30; // Maximum length for the file path

const getCallerInfo = (): string => {
  const originalStack = new Error().stack || '';
  const stackLines = originalStack.split('\n');
  const callerLine = stackLines[3] || '';
  
  // Extract file name and line number from stack trace
  const match = callerLine.match(/\((.*):(\d+):(\d+)\)/);
  
  if (match) {
    const [, filePath, lineNumber, columnNumber] = match;
    // Truncate file path if it exceeds maximum length
    const truncatedPath = filePath.length > MAX_PATH_LENGTH
      ? `...${filePath.slice(-MAX_PATH_LENGTH)}`
      : filePath;
    return `${truncatedPath}:${lineNumber}:${columnNumber}`;
  }
  
  return 'Unknown location';
};

type LogType = 'info' | 'success' | any;

const Log = (msg: string, obj?: object | any, type?: LogType) => {
	if (!logs) return null;

	 // Capture the stack trace to identify the caller
	 const callerInfo = getCallerInfo();

	if(typeof obj==='boolean'  || typeof obj==='number') {
		console.log(coloredLog(msg, type), obj.toString());
	} else {
		console.log(coloredLog(msg, type), obj ? JSON.stringify(obj, null, 4) : '' );
	}

	// console.log(`\x1b[2m \x1b[37m @ ${callerInfo}`);
};

const coloredLog = (msg = '', type: any) => {
	switch (type) {
		case 'info':
			return `ℹ️ \x1b[46m ${msg}  \x1b[0m`;
		case 'success':
			return `✅ \x1b[42=m  ${msg} \x1b[0m`;
		case 'error':
			return `❌ \x1b[41m ${msg}  \x1b[0m`;

		case 'infoNetwork':
			return `📡 \x1b[45m ${msg}  \x1b[0m`;
		case 'successNetwork':
			return `✅ \x1b[44m  ${msg} \x1b[0m`;
		case 'errorNetwork':
			return `🚧 \x1b[41m ${msg}  \x1b[0m`;

		case 'event':
			return `🕒 \x1b[45m  ${msg} \x1b[0m`;

		case 'analytics':
			return `📊 \x1b[2m  ${msg}`;

		default:
			return `\x1b[46m ${msg}  \x1b[0m`;
	}
};

export default Log;

// NODE CONSOLE COLORS

// Reset = "\x1b[0m"
// Bright = "\x1b[1m"
// Dim = "\x1b[2m"
// Underscore = "\x1b[4m"
// Blink = "\x1b[5m"
// Reverse = "\x1b[7m"
// Hidden = "\x1b[8m"

// FgBlack = "\x1b[30m"
// FgRed = "\x1b[31m"
// FgGreen = "\x1b[32m"
// FgYellow = "\x1b[33m"
// FgBlue = "\x1b[34m"
// FgMagenta = "\x1b[35m"
// FgCyan = "\x1b[36m"
// FgWhite = "\x1b[37m"

// BgBlack = "\x1b[40m"
// BgRed = "\x1b[41m"
// BgGreen = "\x1b[42m"
// BgYellow = "\x1b[43m"
// BgBlue = "\x1b[44m"
// BgMagenta = "\x1b[45m"
// BgCyan = "\x1b[46m"
// BgWhite = "\x1b[47m"
