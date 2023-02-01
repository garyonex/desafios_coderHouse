// import winston from winston

export const loggers = winton.createLogger({
    transports: [
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            format: winston.format.combine(
                winston.format.timestamp({ format: 'HH:mm:ss:ms' }),
                winston.format.colorize(),
                winston.format.printf(
                    (info) => `${info.timestamp} ${info.level}: ${info.message}`
                )
            )
        })
    ],
    exitOnError: false
})

if (process.env.NODE_ENV === 'dev') {
    loggers.add(
        new winston.transports.file({
            level: 'info',
            filename: './logs/alls-logs.log',
            handleExceptions: true,
            format: winston.format.combine(
                winston.format.timestamp({
                    format: 'HH:mm:ss:ms'
                }),
                winston.format.errors({
                    stack: true
                }),
                winston.format.printf(
                    (info) => `${info.timestamp} ${info.level}: ${info.message}`
                )
            ),
            maxsize: 5242880,
            maxFiles: 5
        })
    )
}

loggers.info('loggings started')