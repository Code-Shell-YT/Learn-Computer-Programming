
let content = document.getElementById('content');
let tutorial = new Tutorial(content, {
    classes:"w3-light-gray",
});

tutorial.addTitle({
    name:"Beginning of Programming",
    classes:"w3-blue w3-padding-16"
})

tutorial.addSection({

    name:"What is Programming?",
    content:`According to wikipidia, <br>
    ${
        tutorial.addBlock({
            data:`Computer programming is the process of designing and building an executable computer program to accomplish a specific computing result or to perform a specific task. With the help of programming languages we can do that.`,
            classes:``
        })
    }
    <br>
    This means that the executable applications which you are using like; Google app, Facebook, 
    Instagram, Amoung Us game, YouTube are the executable 
    applications which are developed in programming languages.<br>
    <br>Here comes another example...<br>
    Suppose you want to write an essay on Cars, So you will start writing introducation, context, background etc
    for the topic. So, it's a task. And you performed it with English language. Same in programming. To perform
    one task and you use Programming language. 
    <br>
    The most fundamental programming language which a progammer should start with is C.
    In this video series we are going to practice programming concepts with C language.

    In order to do that we have to setup the development environment of that C language in our
    PCs.<br><br>
    <b>How to start programming in C language?</b><br>
    Watch the below video...
    ${ tutorial.addYTVideo({ 
        name:'AR', 
        url: 'https://www.youtube.com/embed/1W_ieaA3evQ'
    }) }
    
    `,

})

tutorial.addFooter({
    data:`Tutorial by KeltaKing (Code shell)`,
    classes:"w3-center w3-blue w3-padding-16"
});
