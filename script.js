var input = $('user-input').val();
var currentRoom = "bedroom";
var hasDressed = "false";
var hasEatten = "false";
var hasBrushed = "false";
var hasWorked = "false";
var tasks = 3;
var hasComputer = "false";
var timesWorked = 0;
var workNeeded = Math.floor(Math.random() * 5);
var penalties = 0;
var lost = "false";
var truth = 0;
var isUpgrading = "false";
var hasVpn = "false";
var chats = 0;
var hasChatted = "false";
var oneChoice = "later";

alert("Welcome to (𝔼𝕔𝕝𝕚𝕡𝕤𝕖) a text adventure game for an english project!");

function msg(message){
  $('#game-text').append(message);
}

function playerInput(iValue){
    var command = iValue.split(" ")[0];

    if(isUpgrading == "true" && command != "exit" && currentRoom == "computer"){
      msg("You can not do that because you are downloading something.");
      return;
    }else if(oneChoice == "true"){
      if(command != "reject" && command != "end" && command != "choices"){
        msg("You must make the two <b>choices</b>.");
        return;
      }
    }

    switch (command) {
        case"you-gay":
        case"you-gey":
        case"u-gay":
        case"u-gey":
        case"no-you":
        case"no-u":
          alert("no u");
          break;
        case"jump":
          msg("<p>You <b>jump</b> up and fall back down.</p>");
          break;
        case"get-ready":
        case"ready":
          if(currentRoom == "bedroom"){
            currentRoom = "main room";
            msg("<p>You go into the <i>main room</i> and dress for work.<br>Now all you have to do is <b>get-dressed</b>, <b>eat-breakfast</b>, <b>brush-up</b>, and go to <b>work</b>.</p>");
          }else{
            msg("<p>You can only do this in the <i>bedroom</i>!</p>");
          }
          break;
        case"dress":
        case"get-dressed":
          if(currentRoom == "main room"){
            if(hasDressed == "false"){
              hasDressed = "true";
              tasks -= 1;
              if(truth == 2 || truth > 3){
                msg("You get dressed in the same stuff you always dress in for <b>work</b>.");
              }else if(truth == 3){
                msg("You get <u>d</u>ressed for <b>w<u>o</u>rk</b>.");
              }else{
                msg("You get dressed for <b>work</b>.");
              }
            }else{
              msg("<p>You are already dressed for <b>work</b>!</p>");
            }
          }else{
            msg("<p>You can only <b>dress</b> in the <i>main room</i>!</p>");
          }
          break;
         case"capitalist":
            msg("<p>A <b>pig</b>.</p>");
            break;
         case"pig":
            msg("<p>A <b>capitalist</b>.</p>");
            break;
        case"eat":
        case"breakfast":
        case"eat-breakfast":
            if(currentRoom == "main room"){
              if(hasEatten == "false"){
                hasEatten = "true";
                tasks -= 1;
                if(truth == 2 || truth > 3){
                  msg("<p>You eat an awful breakfast that is just bread with cream on it for <b>work</b>.</p>");
                }else if(truth == 3){
                  msg("<p>You ea<u>t</u> <u>a</u> hearty breakfa<u>s</u>t with <u>k</u>ream for <b>work</b>.</p>");
                }else{
                  msg("<p>You eat a hearty breakfast for <b>work</b>.</p>");
                }
              }else{
                msg("<p>You have already eaten you greedy <b>pig</b>!</p>");
              }
            }else{
              msg("<p>You can <b>eat</b> in the <i>main room</i>!</p>");
            }
            break;
        case"brush":
        case"brushed":
        case"brush-up":
          if(currentRoom == "main room"){
            if(hasBrushed == "false"){
              hasBrushed = "true";
              tasks -= 1;
              if(truth == 2 || truth > 3){
                msg("<p>You brush yourself up with the same brush you always use.</p>");
              }else if(truth == 3){
                msg("<p>You <b>brush</b> your <u>t</u>eeth and h<u>a</u>ir <u>in</u> the bathroom like how you <b>work<u>ed</u></b> last time.</p>");
              }else{
                msg("<p>You <b>brush</b> your teeth and hair for <b>work</b>.</p>");
              }
            }else{
              msg("<p>You have already <b>brushed</b> your teeth and hair!");
            }
          }else{
            msg("<p>You can only do this in the <i>main room</i>!</p>");
          }
          break;
        case"work":
            if(currentRoom == "main room"){
              if(hasWorked == "false"){
                if(tasks == 3){
                  penalties += 3;
                  msg("<p>You go to working looking like a disgrace to your nation!</p>");
                }else if(tasks == 2){
                  if(hasDressed == "true"){
                    msg("You go to work very hungry with yellow teeth and dirty hair.");
                  }else if(hasEatten == "true"){
                    msg("You go to work dressed poorly with teeth and dirty hair.");
                  }else{
                    msg("You go to work very hungry and dressed very poorly.");
                  }
                  penalties += 2;
                }else if(tasks == 1){
                  if(hasDressed == "false"){
                    msg("You go to work dressed poorly.");
                  }else if(hasEatten == "false"){
                    msg("You go to work hungry.");
                  }else{
                    msg("You go to work with messy hair and yellow teeth.");
                  }
                  penalties += 1;
                }else{
                  msg("You go to work looking very fancy.");
                  if(penalties != 0){
                    penalties -= 1;
                  }
                }
                hasWorked == "true";
                msg("<p>After work you finally get home.<br>You feel like you need some <b>sleep</b>.</p>");
              }else{
                msg("You have already worked today for our glorious <b>country</b>!");
              }
            }else{
              msg("<p>You can only do this in the <i>main room</i>!</p>");
            }
            timesWorked += 1;
            hasWorked == "true";
            break;
        case"country":
          msg("Our golorious country is <b>Arstotzka</b>!")
        break;
        case"arstotzka":
          msg("<p>Our golorious <b>country</b>!</p>")
        break;
        case "gazillion":
          msg("<p>¯\_(ツ)_/¯</p>")
        break
        case"sleep":
          if(currentRoom == "main room"){
              currentRoom = "bedroom";
              if(penalties > 20){
                msg("<p>You wake up to soldiers breaking into your room and arresting you for your none complince with the nation!</p>");
                lost = "true";
              }else if(timesWorked > 100){
                msg("<p>Your hard work for the golorious country has come back to bite you as now you are no longer able to work from stress and you are executed.</p>");
                lost = "true";
              }else if(timesWorked > workNeeded && hasComputer == "false"){
                msg("<p>You go to your bedroom and go to sleep.<br>You wake up in your <i>bedroom</i> and find out that for your work to the nation you have randomly been chosen to have your very own <b>computer</b> (You have to skip work in order to go on it because they turn the power off at night).<br>You should <b>get-ready</b> for work!</p>")
                hasComputer = "true";
                tasks = 3;
                hasWorked = "false";
                hasEatten = "false";
                hasDressed = "false";
                hasBrushed = "false";
              }else{
                msg("<p>You go to your bedroom and go to sleep.<br>You wake up in your <i>bedroom</i>.<br>You should <b>get-ready</b> for work!</p>");
                tasks = 3;
                hasWorked = "false";
                hasEatten = "false";
                hasDressed = "false";
                hasBrushed = "false";
                hasChatted = "false";
                if(isUpgrading == "true"){
                  truth += 1;
                  isUpgrading = "false";
                }
              }
          }else{
            msg("<p>You can only do this in the <i>main room</i>!</p>");
          }
          break;
        case"computer":
            if(currentRoom == "main room" && hasWorked == "false"){
              penalties += Math.floor(Math.random() * 5);
              penalties += 3;

              msg("<p>You skip <b>work</b> to go on the <i>computer</i>. You can <b>exit</b> the computer anytime</p>");
              msg(`<pre>
                ___________________
                | _______________ |
                | |   Welcome   | |
                | |     to      | |
                | |     the     | |
                | |     𝕎𝕖𝕓    | |
                | |_____________| |
                |_________________|
                    _[_______]_
                ___[___________]___
               |         [_____] []|
               |         [_____] []|
               L___________________J
                ___________________
               |###################|</pre>`);
               currentRoom = "computer";
            }else{
              msg("You have to be in the <i>main room</i> to do this!");
            }
          break;
        case "chatting":
        case "chat":
          if(currentRoom == "computer"){
            if(hasChatted == "false"){
              if(chats == 0){
                msg("<p>You start <b>chatting</b> with people and they tell you to get a <b>vpn</b> before doing more actions on the computer. <br>You could either download the <b>vpn</b> or just continue <b>chatting</b></p>");
                penalties += 1;
              }else if (chats == 1){
                if(hasVpn == "false"){
                  penalties += 3;
                }
                msg("<p>--------ℂ𝕙𝕒𝕥--------</p>");
                msg("<p>XxRandom_Guy_1Xx: Hey so you're from the country of <b>Arstotzka</b>.</p>");
                msg("<p>XxRandom_Guy_1Xx: Man that place sucks how can you live like that!</p>");
                msg("<p>[SomeGuy-2.0]: I mean it's not their fault they were most likely born into that country...</p>");
                msg("<p>XxRandom_Guy_1Xx: I know! It's just interesting to meet someone like that on here!</p>");
                msg("<p>Rul3_0f_3s: I can't believe they even let their people have computers!</p>");
                msg("<p>[SomeGuy-2.0]: I'm pretty sure they let them have it for being good workers or something cruel like that.</p>");
                msg("<p>XxRandom_Guy_1Xx: You aren't a <b>spy</b> are you?</p>");
                msg("<p>Rul3_0f_3s: Good point! He may just be an <b>Arstotzkan</b> <b>spy</b>!</p>");
                msg("<p>[SomeGuy-2.0]: Guys from what I have looked up... they are probably not a <b>spy</b>.</p>");
                msg("<p>XxRandom_Guy_1Xx: Either way <b>spy</b> or no <b>spy</b> it is not like anything can happen to me I'm like a <b>gazillion</b> miles away./p>");
                msg("<p>--------𝔼𝕟𝕕 𝕆𝕗 ℂ𝕙𝕒𝕥--------</p>");
                hasChatted = "true";
              }else if(chats == 2){
                if(hasVpn == "false"){
                  penalties += 4;
                  msg("<p>--------ℂ𝕙𝕒𝕥--------</p>");
                  msg("<p>Rul3_0f_3s: Man I heard that <b>Arstotzka</b> was so much different than us!</p>");
                  msg("<p>Rul3_0f_3s: I heard that since the country is so poor that they shut off the power at night!</p>");
                  msg("<p>[SomeGuy-2.0]: Look if the country is having hard times then they do strange things...</p>");
                  msg("<p>Rul3_0f_3s: Why are you even defending them!</p>");
                  msg("<p>[SomeGuy-2.0]: I don't know.. It's just I want to believe in the good of their people you know.</p>");
                  msg("<p>--------𝔼𝕟𝕕 𝕆𝕗 ℂ𝕙𝕒𝕥--------</p>");
                }else{
                  msg("<p>--------ℂ𝕙𝕒𝕥--------</p>");
                  msg("<p>Rul3_0f_3s: Man I heard that <b>Arstotzka</b> was so much different than us!</p>");
                  msg("<p>Rul3_0f_3s: I heard that since the country is so poor that they shut off the power at night!</p>");
                  msg("<p>XxRandom_Guy_1Xx: I read somewhere that they eat horrible food, and dress in the same thing everyday!</p>");
                  msg("<p>Rul3_0f_3s: Oh Yeah! That reminds me of the fact that they clean their teeth and hair with the same brush!</p>");
                  msg("<p>XxRandom_Guy_1Xx: No Way! That's Crazy!</p>");
                  msg("<p>[SomeGuy-2.0]: Hey my guys you're gonna make them crazy if you keep talking about this stuff!</p>");
                  msg("<p>XxRandom_Guy_1Xx: Nah man! Who cares! They should know the <b>truth</b> anyways!</p>");
                  msg("<p>[SomeGuy-2.0]: The truth can really harm these people you know.</p>");
                  msg("<p>Rul3_0f_3s: Well that is their problem really.</p>");
                  msg("<p>Rul3_0f_3s: The truth hurts so you got to just deal with it.</p>");
                  msg("<p>--------𝔼𝕟𝕕 𝕆𝕗 ℂ𝕙𝕒𝕥--------</p>");

                  truth += 1;
                }
              }else if(chats == 3){
                if(hasVpn == "false"){
                  penalties += 5;
                  msg("<p>--------ℂ𝕙𝕒𝕥--------</p>");
                  msg("<p>[SomeGuy-2.0]: Hey Rul3_0f_3s do you know what happened to XxRandom_Guy_1Xx?</p>");
                  msg("<p>Rul3_0f_3s: I don't know man ususaly they talk to us in our chats but it seems like they just dissapeared.</p>");
                  msg("<p>[SomeGuy-2.0]: Hmm that's strange.</p>");
                  msg("<p>--------𝔼𝕟𝕕 𝕆𝕗 ℂ𝕙𝕒𝕥--------</p>");
                }else{
                  msg("<p>--------ℂ𝕙𝕒𝕥--------</p>");
                  msg("<p>XxRandom_Guy_1Xx: Hey guys I found an awesome site for the <b>Arstotzkan</b>!</p>");
                  msg("<p>Rul3_0f_3s: Nicce! What's the site?</p>");
                  msg("<p>[SomeGuy-2.0]: You have my attention.</p>");
                  msg("<p>XxRandom_Guy_1Xx: If you go to <b>www.Nakztotsra.com</b> you can find the truth about it's country.</p>");
                  msg("<p>Rul3_0f_3s: Oh yeah! I remember that site!</p>");
                  msg("<p>[SomeGuy-2.0]: Isn't that site made by <b>Arstotzkan</b> people who escaped the country and leaked goverment documents.</p>");
                  msg("<p>XxRandom_Guy_1Xx: You know it my guy!</p>");
                  msg("<p>XxRandom_Guy_1Xx: It's perfect for them!</p>");
                  msg("<p>XxRandom_Guy_1Xx: My guy if you want to know the truth about your country go there.</p>");
                  msg("<p>--------𝔼𝕟𝕕 𝕆𝕗 ℂ𝕙𝕒𝕥--------</p>");
                  truth += 1;
                }
              }else if(chats == 4 || chats == 5){
                if(hasVpn == "false"){
                  msg("They talk about pointless stuff for the day.");
                  penalties += 6;
                }else{
                  msg("They talk about meaningless things when you know you have a <b>task</b> to do.");
                }
              }else if(chats == 6){
                if(hasVpn == "false"){
                  msg("<p>--------ℂ𝕙𝕒𝕥--------</p>");
                  msg("<p>Rul3_0f_3s: Hey my guy I found this site that can show you the truth about <b>Arstotzka</b>!</p>");
                  msg("<p>[SomeGuy-2.0]: Oh shoot my guy what is it?</p>");
                  msg("<p>Rul3_0f_3s: The site is <b>www.Nakztotsra.com</b> and it is a site whe-</p>");
                  msg("<p>Rul3_0f_3s: ....</p>");
                  msg("<p>[SomeGuy-2.0]: Rul3_0f_3s? What happened my g-</p>");
                  msg("<p>[SomeGuy-2.0]: ....</p>");
                  msg("<p>--------𝔼𝕟𝕕 𝕆𝕗 ℂ𝕙𝕒𝕥--------</p>");

                  penalties += 15;
                }else{
                  msg("They talk about meaningless things when you know you have a <b>task</b> to do.");
                }
              }else if(chats >= 7){
                msg("They talk about meaningless things when you know you have a <b>task</b> to do.");
              }
              hasChatted = "true";
              chats += 1;
            }else{
              msg("<p>You have already chatted for today!</p>");
            }
          }else{
            msg("<p>You have to be on a computer to do that!</p>");
          }
        break;
        case "task":
        case "www.nakztotsra.com":
        if(currentRoom == "computer"){
          if(hasVpn == "true"){
            msg("<p>You find leaked goverment documents from around the world about <b>Arstotzka</b> which leaves you no choice.</p>");
            msg("<p>You can either <b>reject</b> it or <b>end</b> it.");
            oneChoice = "true";
            truth += 100;
          }else{
            msg("Your computer freezes as you are trying to load the site and people come into your house to carry you away!");
            lost = "true";
          }
          msg("<p>You have to be on a computer to do that!</p>");
        }
        break;
        case "choice":
        case "choices":
        msg("<p>You can either <b>reject</b> it or <b>end</b> it.");
        break;
        case "reject":
        if(oneChoice == "true"){
          msg("You smash the computer with your fists and break it.");
          oneChoice = "false";
          msg("<p>You should go to <b>sleep</b>.</p>");
          hasWorked = "true";
          currentRoom = "main room";
        }else{
          msg("<p>You can not do that <b>action</b>!");
        }
        break;
        case "end":
        if(oneChoice == "true"){
          msg("You decide to end it once and for all and out found in your room dead by your own hands with your acceptance of the truth");
          lost = "true";
          oneChoice = "false";
        }else{
          msg("<p>You can not do that <b>action</b>!");
        }
        break;
        case "spies":
        case "spy":
        if(currentRoom == "computer"){
          if(hasVpn != "true"){
            msg(`<pre>
            <b>spy</b>
            /spī/
            noun
            noun: <b>spy</b>; plural noun: <b>spies</b>

                1.
                a person who keeps watch on others secretly.
                "A <b>spy</b> watches the enemy."
            </pre>`);
            penalties += 1;
          }else{
            msg(`<pre>
            <b>spy</b>
            /spī/
            noun
            noun: <b>spy</b>; plural noun: <b>spies</b>

                1.
                A person who secretly collects and reports information on the activities, movements, and plans of an enemy or competitor.
                synonyms:	secret agent, undercover agent, enemy agent, foreign agent, secret service agent, intelligence agent, double agent, counterspy, industrial spy, fifth columnist, mole, plant, scout; control, handler;
                spook;
                informalsnooper;
                archaicintelligencer;
                archaicbeagle
                "<b>Arstotzka</b> has planted two spies in the organization"
                    A person who keeps watch on others secretly.
                    "a spy camera"
            </pre>`);
          }
        }else{
          msg("<p>You have to be on a computer to do that!</p>")
        }
        break;
        case "vpn":
          if(currentRoom == "computer"){
            if(hasVpn != "true"){
                msg("<p>You start a download for a <b>vpn</b>. It will take all day to download so you might as well <b>exit</b>.</p>");
                hasVpn = "true";
                isUpgrading = "true";
            }else{
              msg("<p>You already have a vpn!</p>");
            }
          }else{
            msg("<p>You have to be on a computer to do that!</p>")
          }
          break;
        case "exit":
          if(currentRoom == "computer"){
            msg("<p>You stop using the computer for the night and you should go to <b>sleep</b>.</p>");
            hasWorked = "true";
            currentRoom = "main room";
          }else{
            msg("<p>You have to be on a computer to do that!</p>");
          }
          break;
        default:
            msg("<p>You can not do that <b>action</b>!</p>");
    }
}
$(document).ready(function(){
  $('#game-text').append(rooms.bedroom.start);

  $(document).keypress(function(key){
    if(lost != "true"){
      if (key.which === 13 && $('#user-input').is(':focus')){
        var value = $('#user-input').val().toLowerCase();
        $('#user-input').val("");
        playerInput(value);
      }else if (key.which === 32 && $('#user-input').is(':focus')){
        alert("Use - instead of spaces when inputing an action!");
      }else if(key.which === 32){
        $('#game-text').append("<p>You <b>jump</b> up and fall back down.</p>")
      }
    }
  })
})
