
let content = document.getElementById('content');
let tutorial = new Tutorial(content, {
    classes:"w3-light-gray",
});

tutorial.addTitle({
    name:"Learn computer programming",
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

tutorial.addSection({

    name:`Basic structure of C program`,
    content:{
        Context:`As the English language has its grammar, so does Programming language. It's called syntax.<br>
    The syntax is the rules of writing code. And if your code breaks any rule then an error comes up
    and code stops to being execute.<br>
    Structure of a programming language is the essential part of syntax. 
    In order to understand the structure of C language we will break down this code
    into 2 blocks. <br>
    <br>

    Part 1<br>
    ${tutorial.addBlock({
        data:"#include  &lt;stdio.h>",
        classes:``,
    })}
    <br>
    Part 2<br>
    ${tutorial.addBlock({
        data:`int main(){<br>
            <br>
            printf("Hello World");<br>
            return 0;<br>
            <br>
        }`,
        classes:``,
    })}
    <br>
    Part 2 is the <b>main function.</b> <br>
    So what is main function? First of all, What is a function? <br>
    Function is a group of <b>programming statements.</b> <br>
    Like here,<br>
    printf("hello world") is a statement.<br>
    return 0; is a statement.<br>
    And every statements execute in the same order as written in curly braces {} which is calles
    a <b>code block</b> and the statements inside of code block determines what the 
    function actually do.<br><br>
    `,
    "main function":`
    The <b>main()</b> function is the <b>entry point</b> to the program. So, whenever you execute this code,
    the first thing which execute in code starts from main function.<br>
    In our case printf statement.
    `,
    "printf":`
    Printf is also a function which is already defined and it prints the output. In our case,
    "Hello world" is the output. If you want to print something else let's say "Kushang Shah" 
    write below code.<br>
    ${
        tutorial.addBlock({
            data:`printf("Kushang Shah");`,
            classes:``
        })
    }
    `,
    "return 0;":`
    We will see what is return 0 in detail in later part but for now on as it says it returns 0.
    If you don't write it there then still code will execute. But it is recommended to write it there.
    `,
    "#include":`
    <b>#include</b> is including the stdio.h in our code. stdio.h is called the <b>header file.</b> <br>
    Now what is Header files?<br>
    Header files contains <b>inbuilt functions</b> of C language which are called library functions and 
    they are defined for programmers. <br>
    You know one library function and you have also used it. Which is it?<br>
    It is <b>printf.</b>
    `,
    "Summery":`
    main is a function and also an entry point for the program. printf is a function which is defined in 
    header file stdio.h and #include is including a header file into our code.
    <br>
    To understand this concepts more effectively watch the below video.
    ${ tutorial.addYTVideo({ 
        name:'AR', 
        url: 'https://www.youtube.com/embed/iR-ARjjYAiQ'
    }) }
    `,

    }
}, true);

tutorial.addFooter({
    data:`Tutorial by KeltaKing (Code shell)`,
    classes:"w3-center w3-blue w3-padding-16"
});
