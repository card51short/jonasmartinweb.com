$(function() {
    //fade in when page loads
    $('.main').hide().delay(250).fadeIn(1200);
    $('.banner').hide().delay(500).slideToggle();
    $('img').hide().delay(1500).slideToggle();
    $('div.content').fadeIn(1200)
    $('div.aboutdiv').hide();
    $('div.workdiv').hide();
    $('div.emaildiv').hide();
    
    //create active variable and set it at home page (1)
    $.active = "1";
    if ($.active === '1') {
        $(".homebutton").attr("src", "images/homeButtonWhite.png");
        $(".heart").animate({borderWidth: "5px"});
    }else if ($.active === "2") {
        $(".aboutbutton").attr("src", "images/aboutButtonWhite.png");
    }else if ($.active === "3"){
        $(".projectsbutton").attr("src", "images/projectsButtonWhite.png");
    }else if ($.active ==="4"){
        $(".emailbutton").attr("src", "images/emailButtonWhite.png");
    }
     
    //pulsate when images are clicked :
    $("img.homebutton").on("click", function() {
        $(this).each(function() {
            $(this).effect( "pulsate" );
            $('div.content').fadeIn(500);
            $('div.aboutdiv').hide();
            $('div.workdiv').hide();
            $('div.emaildiv').hide();
            $.active = '1';
        })
    })
    
    $("img.aboutbutton").on("click", function() {
        $(this).each(function() {
            $(this).effect( "pulsate" );
            $('div.aboutdiv').fadeIn(500);
            $('div.content').hide();
            $('div.workdiv').hide();
            $('div.emaildiv').hide();
            $.active = '2';
        })
    })
    
    $("img.projectsbutton").on("click", function() {
        $(this).each(function() {
            $(this).effect( "pulsate" );
            $('div.workdiv').fadeIn(500);
            $('div.content').hide();
            $('div.aboutdiv').hide();
            $('div.emaildiv').hide();
            $.active = '3';
        })
    })
    
    $("img.contactbutton").on("click", function() {
        $(this).each(function() {
            $(this).effect( "pulsate" );
            $('div.emaildiv').fadeIn(500);
            $('div.content').hide();
            $('div.aboutdiv').hide();
            $('div.workdiv').hide();
            $.active = '4';
        })
    })
    
        
    
    //highlight nav buttons on rollover and unhighlight on rollout
    $(".homebutton").on("mouseover", function() {
            $(this).attr("src", "images/homeButtonWhite.png");
    })
    
    $(".homebutton").on("mouseout", function() {
        if ($.active != '1') {
            $(this).attr("src", "images/homeButton.png");
            
        }
            
      
    })
    
    $(".aboutbutton").on("mouseover", function() {
            $(this).attr("src", "images/aboutButtonWhite.png");
    })
    
    $(".aboutbutton").on("mouseout", function() {
        if ($.active != '2') {
            $(this).attr("src", "images/aboutButton.png");
            
        }
      
    })
    
    $(".projectsbutton").on("mouseover", function() {
            $(this).attr("src", "images/projectsButtonWhite.png");
    })
    
    $(".projectsbutton").on("mouseout", function() {
        if ($.active != '3') {
            $(this).attr("src", "images/projectsButton.png");
        }
            
      
    })
    
    $(".contactbutton").on("mouseover", function() {
            $(this).attr("src", "images/emailButtonWhite.png");
    })
    
    $(".contactbutton").on("mouseout", function() {
        if ($.active != '4') {
            $(this).attr("src", "images/emailButton.png");
        }   
      
    })
    
    
    //set nav buttons as active/inactive
    $(".homebutton").click(function() { 
            $(this).attr("src", "images/homeButtonWhite.png");
            $(".aboutbutton").attr("src", "images/aboutButton.png");
            $(".contactbutton").attr("src", "images/emailButton.png");
            $(".projectsbutton").attr("src", "images/projectsButton.png");
            
            $(".heart").animate({borderWidth: "5px"});
            $(".club").animate({borderWidth: "0px"});
            $(".diamond").animate({borderWidth: "0px"});
            $(".spade").animate({borderWidth: "0px"});
            
            
        })
            
    $(".aboutbutton").click(function() { 
            $(this).attr("src", "images/aboutButtonWhite.png");
            $(".homebutton").attr("src", "images/homeButton.png");
            $(".contactbutton").attr("src", "images/emailButton.png");
            $(".projectsbutton").attr("src", "images/projectsButton.png");
            
            $(".heart").animate({borderWidth: "0px"});
            $(".club").animate({borderWidth: "5px"});
            $(".diamond").animate({borderWidth: "0px"});
            $(".spade").animate({borderWidth: "0px"});
            
             
        })
            
    $(".projectsbutton").click(function() { 
            $(this).attr("src", "images/projectsButtonWhite.png");
            $(".aboutbutton").attr("src", "images/aboutButton.png");
            $(".contactbutton").attr("src", "images/emailButton.png");
            $(".homebutton").attr("src", "images/homeButton.png");
            
            $(".heart").animate({borderWidth: "0px"});
            $(".club").animate({borderWidth: "0px"});
            $(".diamond").animate({borderWidth: "5px"});
            $(".spade").animate({borderWidth: "0px"});
            
        })
           
    $(".contactbutton").click(function() { 
            $(this).attr("src", "images/emailButtonWhite.png");
            $(".aboutbutton").attr("src", "images/aboutButton.png");
            $(".projectsbutton").attr("src", "images/projectsButton.png");
            $(".homebutton").attr("src", "images/homeButton.png");
            
            $(".heart").animate({borderWidth: "0px"});
            $(".club").animate({borderWidth: "0px"});
            $(".diamond").animate({borderWidth: "0px"});
            $(".spade").animate({borderWidth: "5px"});
            
        })
        //illuminate about page image
        $('document').ready(function(){

            $('.about2').illuminate({
                'intensity': '0.5',
                'color': '#98cb00',
                'blink': 'true',
                'blinkSpeed': '1200',
                'outerGlow': 'true',
                'outerGlowSize': '30px',
                'outerGlowColor': '#ff0000'
            });
        });
        
       var slideIndex = 0;
        carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none"; 
        }
        slideIndex++;
        if (slideIndex > x.length) {slideIndex = 1} 
        x[slideIndex-1].style.display = "block"; 
        setTimeout(carousel, 2000); // Change image every 2 seconds
    }
        
    $(".project1Image").on("mouseover", function() {
            $(".projectDescription").html("<h1>Thunderword.net</h1><br><p>While attending Highline College, I designed the website for the school's newspaper: The Thunderword.  I used HTML, CSS and PHP to build the site.  The site uses File IO to read Word Documents which contain each writer's stories and a PHP script I wrote automatically puts the contents of the article on the website. I maintain and update the website weekly and plan on adding more content to it in the near future.</p>");
    })
    
    $(".project1Image").on("mouseout", function() {
           $(".projectDescription").html("<p></p>");
      
    })
    
    $(".project2Image").on("mouseover", function() {
            $(".projectDescription").html("<h1>Highline Bookstore Design</h1><br><p>I was given the task of changing the layout to the Highline Bookstore's website while attending the school.  I used Photoshop to do the design and decided to go with an actual book as the background.  Each different picture would link to the appropriate page.  Althought it is not functioning currently, the design was chosen to be implemented for Fall 2016.</p>");
    })
    
    $(".project2Image").on("mouseout", function() {
           $(".projectDescription").html("<p></p>");
      
    })
    
    $(".project3Image").on("mouseover", function() {
            $(".projectDescription").html("<h1>VIP Vascular</h1><br><p>This site was designed as part of a 4-person group using WordPress.  It is fully functional and I was responsible for much of the PHP scripting on the site.  We were able to complete the project in 6 weeks using an Agile meeting system and documentating our changes in Redmine and Git.</p>");
    })
    
    $(".project3Image").on("mouseout", function() {
           $(".projectDescription").html("<p></p>");
      
    })
    
    $(".project4Image").on("mouseover", function() {
            $(".projectDescription").html("<h1>Jonas' BlackJack</h1><br><p>This is a Blackjack program I wrote on my own to test my skills.  The game is fully functional and keeps score as well.  It was written using JavaScript, HTML and CSS only.</p>");
    })
    
    $(".project4Image").on("mouseout", function() {
           $(".projectDescription").html("<p></p>");
      
    })
    
    $(".project5Image").on("mouseover", function() {
            $(".projectDescription").html("");
    })
    
    $(".project5Image").on("mouseout", function() {
           $(".projectDescription").html("");
      
    })
    
    $(".project6Image").on("mouseover", function() {
            $(".projectDescription").html("");
    })
    
    $(".project6Image").on("mouseout", function() {
           $(".projectDescription").html("");
      
    })
        
         
})


    //delay for fill in for nav
    setTimeout(myFunction, 2000)
    
    function myFunction() {
        $('.banner').addClass('fill');
    }
    
    






