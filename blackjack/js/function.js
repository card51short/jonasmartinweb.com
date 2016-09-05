//create variable with all 52 cards
    var randomCards= new Array ("images/cards/2c.png", "images/cards/2s.png","images/cards/2h.png", "images/cards/2d.png", "images/cards/3c.png", "images/cards/3s.png","images/cards/3h.png", "images/cards/3d.png",                                        "images/cards/4c.png", "images/cards/4s.png","images/cards/4h.png", "images/cards/4d.png", "images/cards/5c.png", "images/cards/5s.png","images/cards/5h.png", "images/cards/5d.png",                                        "images/cards/6c.png", "images/cards/6s.png","images/cards/6h.png", "images/cards/6d.png", "images/cards/7c.png", "images/cards/7s.png","images/cards/7h.png", "images/cards/7d.png",                                        "images/cards/8c.png", "images/cards/8s.png","images/cards/8h.png", "images/cards/8d.png", "images/cards/9c.png", "images/cards/9s.png","images/cards/9h.png", "images/cards/9d.png",                                        "images/cards/10c.png", "images/cards/10s.png","images/cards/10h.png", "images/cards/10d.png","images/cards/jc10.png", "images/cards/js10.png","images/cards/jh10.png",                                        "images/cards/jd10.png", "images/cards/qc10.png", "images/cards/qs10.png","images/cards/qh10.png", "images/cards/qd10.png", "images/cards/kc10.png", "images/cards/ks10.png",                                        "images/cards/kh10.png", "images/cards/kd10.png", "images/cards/ac1ace.png", "images/cards/as1ace.png","images/cards/ah1ace.png", "images/cards/ad1ace.png");
        var playerHand = 0,
        dealerHand = 0,
        pHasAce,
        dHasAce,
        pWins = 0,
        dWins = 0;
        //get RegEx to get numbers from string
        var numberPattern = /\d+/g;
        //set card variables for player
        var player1 = document.getElementById("p1"),
        player2 = document.getElementById("p2"),
        player3 = document.getElementById("p3"),
        player4 = document.getElementById("p4"),
        player5 = document.getElementById("p5"),
        player6 = document.getElementById("p6"),
        player7 = document.getElementById("p7"),
        playerScore = document.getElementById("pScore"),
        pTotal = document.getElementById("playersTotal");
        //set card variables for dealer
        var dealer1 = document.getElementById("d1"),
        dealer2 = document.getElementById("d2"),
        dealer3 = document.getElementById("d3"),
        dealer4 = document.getElementById("d4"),
        dealer5 = document.getElementById("d5"),
        dealer6 = document.getElementById("d6"),
        dealer7 = document.getElementById("d7");
        dealerScore= document.getElementById("dScore");
        dTotal = document.getElementById("dealersTotal");
        //set button variables and listeners
        var dealBtn = document.getElementById("dealButton"),
        splitBtn = document.getElementById('splitButton'),
        hitBtn =  document.getElementById("hitButton"),
        ddBtn = document.getElementById('ddButton'),
        stayBtn =  document.getElementById("stayButton");
        dealBtn.addEventListener("click", deal);
        hitBtn.addEventListener("click", playerHit);
        stayBtn.addEventListener("click", stay);
        ddBtn.addEventListener('click', doubleDown);
        splitBtn.addEventListener('click', split);
        //set variables for score
        var scoreBoard = document.getElementById("score");
        //disable the hit and stay buttons after DOM content is loaded
        document.addEventListener('DOMContentLoaded', function() {
            hitBtn.disabled = true;
            stayBtn.disabled = true;
            ddBtn.disabled = true;
            splitBtn.disabled = true;
        }, false);
        function deal() {
            //set aces to false
            pHasAce = false;
            dHasAce = false;
            //enable/disable buttons
            hitBtn.disabled = false;
            stayBtn.disabled = false;
            dealBtn.disabled = true;
            ddBtn.disabled = true;
            splitBtn.disabled = true;
            //reset winner alert and hands
            playerHand = 0;
            dealerHand = 0;
            scoreBoard.innerHTML = "";
            //create random numbers for cards
            var randomNumberd1 = Math.floor((randomCards.length-1)*Math.random()),
            randomNumberp1 = Math.floor((randomCards.length-1)*Math.random()),
            randomNumberp2 = Math.floor((randomCards.length-1)*Math.random());
            //set 2 player cards and 1 dealer card set and other dealer card face down
            dealer1.src = randomCards[randomNumberd1];
            dealer2.src = "images/cards/rb.png";
            player1.src = randomCards[randomNumberp1];
            player2.src = randomCards[randomNumberp2];
            // set unused player cards to blank
            player3.src = "";
            player4.src = "";
            player5.src = "";
            player6.src = "";
            player7.src = "";
            // set unused dealer cards to blank
            dealer3.src = "";
            dealer4.src = "";
            dealer5.src = "";
            dealer6.src = "";
            dealer7.src = "";
            //run calculateHand function
            calculateStartingHand();
            //if player has 9, 10 or 11 - allow double down
            if (playerHand == 9 || playerHand == 10 || playerHand == 11) {
                ddBtn.disabled = false;
            }
            if (parseInt(player1.src.match( numberPattern )) == parseInt(player2.src.match( numberPattern ))) {
                splitBtn.disabled = false;
            }
        }
        function doubleDown() {
            var randomNumberp3 = Math.floor((randomCards.length-1)*Math.random());
            player3.src = randomCards[randomNumberp3];
            playerHand += parseInt(player3.src.match( numberPattern ))
            stay();
        }
        function split() {
            
        }
        function calculateStartingHand(){
            //calculate starting hands
            playerHand = parseInt(player1.src.match( numberPattern )) + parseInt(player2.src.match( numberPattern ));
            dealerHand = parseInt(dealer1.src.match( numberPattern ));
            checkAces();
            //fill in values
            if (pHasAce) {
                pTotal.textContent = "Player's total: " + playerHand + " or " + (playerHand+10);
            }else
                pTotal.textContent = "Player's total: " + playerHand;
            dTotal.textContent = "Dealer's total: " + dealerHand;
        }
        function checkAces(){
            if (player1.src.indexOf('ace') != -1 || player2.src.indexOf('ace') != -1|| player3.src.indexOf('ace') != -1 || player4.src.indexOf('ace') != -1 || player5.src.indexOf('ace') != -1 || player6.src.indexOf('ace') != -1 ||
                 player7.src.indexOf('ace') != -1) {
                pHasAce = true;
            }
            if (dealer1.src.indexOf('ace') != -1 || dealer2.src.indexOf('ace') != -1 || dealer3.src.indexOf('ace') != -1 || dealer4.src.indexOf('ace') != -1 || dealer5.src.indexOf('ace') != -1 || dealer6.src.indexOf('ace') != -1                || dealer7.src.indexOf('ace') != -1) {
                dHasAce = true;
            }
        }
        function playerHit() {
            //disable double down
            ddBtn.disabled = true;
            //create random numbers
            var randomNumberp3 = Math.floor((randomCards.length-1)*Math.random()),
            randomNumberp4 = Math.floor((randomCards.length-1)*Math.random()),
            randomNumberp5 = Math.floor((randomCards.length-1)*Math.random()),
            randomNumberp6 = Math.floor((randomCards.length-1)*Math.random()),
            randomNumberp7 = Math.floor((randomCards.length-1)*Math.random());
            //give player a new card and add value to playerHand 
            if (!player3.src.includes("images")) {
                player3.src = randomCards[randomNumberp3];
                playerHand += parseInt(player3.src.match( numberPattern ))
            }else if (!player4.src.includes("images")) {
                player4.src = randomCards[randomNumberp4];
                playerHand += parseInt(player4.src.match( numberPattern ))
            }else if (!player5.src.includes("images")) {
                player5.src = randomCards[randomNumberp5];
                playerHand += parseInt(player5.src.match( numberPattern ))
            }else if (!player6.src.includes("images")) {
                player6.src = randomCards[randomNumberp6];
                playerHand += parseInt(player6.src.match( numberPattern ))
            }else if (!player7.src.includes("images")) {
                player7.src = randomCards[randomNumberp7];
                playerHand += parseInt(player7.src.match( numberPattern ))
            }
            checkAces();
            calculatePlayerHand();
        }
        function calculatePlayerHand(){
            //if player busts - dealer wins
            if (playerHand > 21) {
                stayBtn.disabled = true;
                hitBtn.disabled = true;
                dealBtn.disabled = false;
                ddBtn.disabled = true;
                dWins++;
                scoreBoard.innerHTML = "Dealer Wins!";
                playerScore.innerHTML = "Player: " + pWins;
                dealerScore.innerHTML = "Dealer: " + dWins;
            }
            //if player has Ace - change how score is displayed - if blackjack - player wins
            if (pHasAce) {
                if((playerHand+10) > 21){
                    pTotal.textContent = "Player's total: " + playerHand;
                }else if ((playerHand+10) == 21) {
                    playerHand + 10;
                    pTotal.textContent = "Player's total: " + playerHand;
                    stayBtn.disabled = true;
                    hitBtn.disabled = true;
                    dealBtn.disabled = false;
                    ddBtn.disabled = true;
                    pWins++;
                    scoreBoard.innerHTML = "Player Wins!";
                    playerScore.innerHTML = "Player: " + pWins;
                    dealerScore.innerHTML = "Dealer: " + dWins; 
                }else
                    pTotal.textContent = "Player's total: " + playerHand + " or " + (playerHand+10);
            }
            else
                pTotal.textContent = "Player's total: " + playerHand;
        }
        function stay() {
        //if player has an ace and stays - add 10 to score if 17, 18, 19, 20 or 21
            if (pHasAce) {
                if (playerHand > 6 && playerHand < 12) {
                    playerHand += 10;
                    pTotal.textContent = "Player's total: " + playerHand;
                }
            }
           //enable/disable buttons
           hitBtn.disabled = true;
           stayBtn.disabled = true;
           dealBtn.disabled = false;
           //create dealer randomNumbers
           var randomNumberd2 = Math.floor((randomCards.length-1)*Math.random());
           //give dealer his first card
            dealer2.src = randomCards[randomNumberd2];
            dealerHand += parseInt(dealer2.src.match( numberPattern ));
            dTotal.textContent = "Dealer's total: " + dealerHand;
            checkAces();
            //if necessary - dealer hits
            if (dHasAce) {
                if (dealerHand > 6 && dealerHand < 12) {
                    dealerHand += 10;
                    dTotal.textContent = "Dealer's total: " + dealerHand;
                }
            }
            if (dealerHand < 17) {
                dealerHit();
            }else{
                dTotal.textContent = "Dealer's total: " + dealerHand;
                compareHands();
            } 
        }
        function dealerHit() {
            //set random Dealer cards
            var randomNumberd3 = Math.floor((randomCards.length-1)*Math.random()),
            randomNumberd4 = Math.floor((randomCards.length-1)*Math.random()),
            randomNumberd5 = Math.floor((randomCards.length-1)*Math.random()),
            randomNumberd6 = Math.floor((randomCards.length-1)*Math.random()),
            randomNumberd7 = Math.floor((randomCards.length-1)*Math.random());
            //give dealer next card
            if (!dealer3.src.includes("images")) {
                dealer3.src = randomCards[randomNumberd3];
                dealerHand += parseInt(dealer3.src.match( numberPattern ))
            } else if (!dealer4.src.includes("images")) {
                dealer4.src = randomCards[randomNumberd4];
                dealerHand += parseInt(dealer4.src.match( numberPattern ))
            }else if (!dealer5.src.includes("images")) {
                dealer5.src = randomCards[randomNumberd5];
                dealerHand += parseInt(dealer5.src.match( numberPattern ))
            }else if (!dealer6.src.includes("images")) {
                dealer6.src = randomCards[randomNumberd6];
                dealerHand += parseInt(dealer6.src.match( numberPattern ))
            }else if (!dealer7.src.includes("images")) {
                dealer7.src = randomCards[randomNumberd7];
                dealerHand += parseInt(dealer7.src.match( numberPattern ))
            }
            checkAces();           
            if (dealerHand < 17) {
                dealerHit();
            }else
                dTotal.textContent = "Dealer's total: " + dealerHand;
                compareHands();
        }
        function compareHands() {
            //enable/disable buttons
            dealBtn.disabled = false;
            stayBtn.disabled = true;
            hitBtn.disabled = true;
            if (dealerHand > 21) {
                stayBtn.disabled = true;
                hitBtn.disabled = true;
                dealBtn.disabled = false;
                ddBtn.disabled = true;
                pWins++;
                dTotal.textContent = "Dealer's total: " + dealerHand;
                scoreBoard.innerHTML = "Player Wins!";
                playerScore.innerHTML = "Player: " + pWins;
                dealerScore.innerHTML = "Dealer: " + dWins;
            }else{
                //compare hands
                if (dealerHand > playerHand) {
                    dWins++;
                    scoreBoard.innerHTML = "Dealer Wins!";
                }else if (playerHand > dealerHand) {
                    pWins++;
                    scoreBoard.innerHTML = "Player Wins!";
                }else if (playerHand == dealerHand) {
                    scoreBoard.innerHTML = "Push!";
                }
                //show winner
                playerScore.innerHTML = "Player: " + pWins;
                dealerScore.innerHTML = "Dealer: " + dWins;
            }
        }