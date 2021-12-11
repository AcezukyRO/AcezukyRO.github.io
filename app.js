$('body').terminal({
    // help
    help: function () {
        this.echo("iam \t\t iam command and pass your name as argument"
        + "\naboutme \t About me"
        + "\nosu \t\t View my osu! stuff"
        + "\ncontacts \t More ways to contact me"
        + "\nrock-on \t :3"
        + "\nreferences \t How I made this terminal"
        + "\nexit \t\t Close this terminal"
        );
    },
    // iam
    iam: function (name) {
        this.echo('Hello, ' + name);
    },
    // rock-on
    "rock-on": function () {
        this.echo("owo? I'm here~ :3");
    },
    // aboutme
    aboutme: function () {
        this.echo('An uni student who is trying to balance between tourney staffing and study.'
        + '\nI am also interested in games, computer stuffs and sometime in medics.'
        );
    },
    // osu
    osu: function () {
        this.echo('An osu! player trying to get better in all gamemode (jack of all trade)'
        + '\nosu! profile link: https://osu.ppy.sh/users/9676089'
        );
    },
    // references
    references: function () {
        this.echo('Making web terminal using jquery: https://www.geeksforgeeks.org/how-to-build-simple-terminal-like-website-using-jquery/'
        + '\nGithub repository: https://github.com/AcezukyRockon/acezukyro.github.io'
        );
    },
    // refereces
    contacts: function () {
        this.echo('Discord: rock-on#9446'
        + '\nTwitter: https://twitter.com/AcezukyRockon'
        + '\nFacebook: https://www.facebook.com/AcezukyRockon/'
        );
    },
    // exit
    exit: function () {
        close();
        this.echo("If you still see this line more than 2 seconds, oh well... It doesn't work sometime.");
    }
}, {
    greetings: "Welcome to rock-on's terminal! Type 'help' to view all commands."
});
