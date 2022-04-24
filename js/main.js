function getContent(command){
    var message = "";
    content[command].forEach(line => {
        message += line;
        if((content[command].indexOf(line)) !== (content[command].length - 1)){
            message += '\n';
        }
    })
    return message;    
}

jQuery(function($, undefined) {
    $('#terminal').terminal(function(command) {
        var message;
        if (command !== '') {
            switch(command){
                case 'help':
                case 'whoami':
                case 'edu': 
                case 'skills':
                case 'contact':
                case 'test':
                    message = getContent(command);
                    this.echo(message);
                    break;
                default:
                    this.echo(getContent('invalid'));
            }
        }
        
    }, {
        greetings: getContent('greetings'),
        name: getContent('name'),
        height: '100%',
        width: '200%',
        prompt: getContent('prompt')
    });
});