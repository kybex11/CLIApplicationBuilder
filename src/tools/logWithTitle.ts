export function logWithTitle(text: string, title:string, useTranscriptTitle: boolean, warningText:string){
        if (useTranscriptTitle) {
            console.log('\x1b[33m%s\x1b[0m', `[ ${title} ]`)
        } else {
            console.log('\x1b[33m%s\x1b[0m', `${title}`)
        }

        console.log(`\n ${text}`);

        if (warningText.length >= 1) {
            console.log('\x1b[31m%s\x1b[0m', `\n${warningText}`);
        }
    
}