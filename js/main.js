jQuery(function($, undefined) {
    // var json = JSON.parse()
    $('#terminal').terminal(function(command) {
        if (command !== '') {
            switch(command){
                case 'help':
                    this.echo('Available commands:\nwhoami        Learn About Me\nedu           Education\nskills        Skills\ncontact       Contact Me');
                    break;
                case 'whoami':
                    this.echo('under construction..( ͡~ ͜ʖ ͡°)');
                    break;
                case 'edu': 
                    this.echo('under construction..( ͡~ ͜ʖ ͡°)');
                    break;
                case 'contact':
                    this.echo('under construction..( ͡~ ͜ʖ ͡°)');
                    break;
                case 'contact':
                    this.echo('under construction..( ͡~ ͜ʖ ͡°)');
                    break;
                case 'test':
                    this.echo('under construction..( ͡~ ͜ʖ ͡°)')
                    break;
                default:
                    this.echo('[[;red;]invalid input]');

            }
        }
        
    }, {
        greetings: '[[b;purple;]kvolakakis:][[b;yellow;]$] Dear Guest, Welcome!\n[[b;purple;]kvolakakis:][[b;yellow;]$] Type [[b;#ff8c69;]"help"] to view available options. :)\n',
        name: 'js_demo',
        height: '100%',
        width: '100%',
        prompt: '[[b;purple;]guest:][[b;yellow;]$] '
    });
});