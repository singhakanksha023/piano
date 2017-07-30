
    $('.welcome-screen button').on('click', function() {
    var name = $('#name-input').val();
    /*
    var message = "Welcome, " + name;
    $('.main .user-name').text(message);
    $('.welcome-screen').addClass('hidden');
    $('.main').removeClass('hidden');
}); */
if(name.length > 2) { //name.length should be greater then 2 then only the code will run else nothing will happen
var message = "Welcome, " +  name;//welcome with the name entered
$('.main .user-name').text(message);//main screen after "go" is clicked display welcome with the user name login
$('.welcome-screen').addClass('hidden');//welcome screen will be hidden using hidden class
$('.main').removeClass('hidden');//main screen will be free from hidden class and we can see the main screen
}
else { //else block will run when if statement is not statisfied
$('#name-input').addClass('error');//error if lenght or name lenght is less then 2 
}
});

//function fancyTimeFormat is made for time to convert into hours:min:sec
function fancyTimeFormat(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600); //float time conversion for hours
    var mins = ~~((time % 3600) / 60); //float time conversion for minutes
    var secs = time % 60; //float time conversion for seconds

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret; //returns the format of time for the song to be played
}

function toggleSong() //a function to turn music on and off when reqired to reduce the writing of code baar baar
    {
var song = document.querySelector('audio'); //audio is selected and saved in variable song
if(song.paused == true) { //if song paused then run the below code to play it
console.log('Playing');
$('.play-icon').removeClass('fa-play').addClass('fa-pause'); //play icon is displayed then remove this class and add add pause class in it so that when pausing the track is done we get the status of song by seeing the icon
song.play(); //run the song
}
else { //if song is not paused or is being playing then run the following code to stop it
console.log('Pausing'); 
$('.play-icon').removeClass('fa-pause').addClass('fa-play'); //pause icon is displayed then remove this class and add add play class in it so that when pausing the track is done we get the status of song by seeing the icon
song.pause(); //pause the song
}
} 

//function for currenttime and duration of the song selected
function updateCurrentTime() {
var song = document.querySelector('audio');

var currentTime = Math.floor(song.currentTime); //current time of the song is saved in variable currentTime
currentTime = fancyTimeFormat(currentTime); //the function fancyTimeFormat is implemented in the current time format to convert it into hours:min:sec format
var duration = Math.floor(song.duration); //song duration of the song is saved in variable duration
duration = fancyTimeFormat(duration); //the function fancyTimeFormat is implemented in the song duration format to convert it into hours:min:sec format
$('.time-elapsed').text(currentTime); //now the currentTime var displays the time under time-elapsed div
$('.song-duration').text(duration); //now the duration var of the song.duration displays duration under song-duration div 
}


//code begins for play the song using play icon
 $('.play-icon').on('click',function(event) { //whenever play icon is clicked the son starts playing
    console.log(event);
// var song = document.querySelector('audio');
//  if(song.paused == true){//if else block starts
//  console.log("playing");//playing when song played
//  $('.play-icon').removeClass('fa-play').addClass('fa-pause');
//  song.play();//play() function for song 
//  }
//  else
//  {
//     console.log("paused");//pause when song paused
//     song.pause(); //pause() function to pause the song 
//     $('.play-icon').removeClass('fa-pause').addClass('fa-play');
//  } 
toggleSong(); //using toggleSong function we replaced the play pause code with toggleSong() so that we do not have to repeat the whole play pause code many times when required
 }); 

//code for having both pause and play icons
 $('body').on('keypress',function(event) { //whenever key is pressed it works same like on.click

var target = event.target; //object for event is target
if (event.keyCode == 32 && target.tagName !='INPUT')//key value of space bar is 32 and will only run when keycode 32 wil be pressed but not when spacebar is used to input the name of song
{
// var song = document.querySelector('audio');
// if(song.paused == true) { //if statement starts
// console.log('Playing'); //playing when song played
// $('.play-icon').removeClass('fa-play').addClass('fa-pause'); //here fa-play class is removed and fa-play is replaced by fa-pause class whenever song is switched from play to pause option
// song.play(); //play() function for song 
// }
// else { //else statement starts
// console.log('Pausing'); //pausing when song paused
// $('.play-icon').removeClass('fa-pause').addClass('fa-play'); //here fa-pause class is removed and fa-pause is replaced by fa-play class whenever song is switched from pause to play option
// song.pause(); //pause() function for song 

// }
toggleSong(); //using toggleSong function we replaced the play pause code with toggleSong() so that we do not have to repeat the whole play pause code many times when required
}
}); 

/*window.onload = function() {
setTimeout(function() { //set timeout only displas the time once but we require time at fixed intervals only
updateCurrentTime();
},1000);
} */

// var songName1 = 'Tamma Song'; //song name is stored in a variable now
// var songName2 = 'Humma Song';
// var songName3 = 'Nashe Si Chadh Gayi';
// var songName4 = 'The Breakup Song';
// var songName5 = 'Badri Ki Dulhania (Title Track)'; 

//ARRAYS
 // var songList = ['Badri Ki Dulhania (Title Track)',
 // 'Humma Song', 'Nashe Si Chadh Gayi', 'The Breakup Song','Darasal','Fursat - Arjun Kanungo','Despacito(Remix)','Love you like a love song(Selena)','Why not Me??','Escape','We dont talk any more','Chain  Sanu Ik Pal Chain','Sau Aasoon','Steal-My-Girl-One-Direction'];  //declaration of array for songlist in a single list and storing all the songs in a simple array variable
 // var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3','song5.mp3','song6.mp3','song7.mp3','song8.mp3','song9.mp3','song10.mp3','song11.mp3','song12.mp3','song13.mp3','song14.mp3','song15.mp3']; //the audio to be played are also stored in array fileNAmes
 // var artistList = [' Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi','Badshah, Jubin Nautiyal, Shashaa Tirupati','Arijit Singh','Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi','Atif Aslam','Arjun Kanungo','Daddy,Luis Fonsi,ft Justin','Selena Gomez','Enrique Iglesias','Enrique Iglesias','Chalie','Shivali','Shankar Mahadevan','One-Direction'];
 // var albumList = ['Badrinath ki Dulhania','Ok Jaanu','Befikre','Ae Dil Hai Mushkil','Raabata','Fursat(album)','ft Justin(Album)','Album','Why Not ME!','Album','Album','shivali music','KAtti BAtti','One-Direction'];
 // var durationList = ['2:56','3:15','2:34','2:29','3:15','2:53','2:45','3:08','3:38','3:28','3:37','4:13','5:38','3:47'];

var songs = [{
        'name': 'Badri Ki Dulhania (Title Track)',
        'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
       'fileName': 'song1.mp3',
       'image':'song1.jpg'
    },
    {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'song2.mp3',
        'image':'song2.jpg'
    },
    {
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song3.mp3',
        'image':'song3.jpg'
    },
    {
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3',
        'image':'song4.jpg'
    },
    {
        'name': 'Darasal',
        'artist': 'Atif Aslam',
        'album': 'Raabta',
        'duration': '3:15',
        'fileName': 'song5.mp3'
    },
    {
        'name': 'Fursat',
        'artist': 'Arjun Kanungo',
        'album': 'Fursat',
        'duration': '2:53',
        'fileName': 'song6.mp3',
        'image':'song6.jpg'
    },
    ];

//WINDOW ONLOAD
window.onload = function() {

   $('#songs').DataTable();
   $('#songs').DataTable({ //object called to remove paging
        paging: false
    });
 changeCurrentSongDetails(songs[0]);
// $('#song1 .song-name').text(songName1); //whenever page is loaded then the div having song-name is loaded and songName variable is dislayed as "tamma song"
// $('#song2 .song-name').text(songName2);
// $('#song3 .song-name').text(songName3);
// $('#song4 .song-name').text(songName4);
// $('#song5 .song-name').text(songName5);


//   $('#song1 .song-name').text(songList[0]); // for song1 the track in songList[0] will be displayed
//   $('#song2 .song-name').text(songList[1]); // for song2 the track in songList[1] will be displayed
//   $('#song3 .song-name').text(songList[2]); // for song3 the track in songList[2] will be displayed
//     $('#song4 .song-name').text(songList[3]); // for song4 the track in songList[3] will be displayed
//  $('#song5 .song-name').text(songList[4]); // for song5 the track in songList[4] will be displayed
//  $('#song6 .song-name').text(songList[5]); // for song6 the track in songList[5] will be displayed
//  $('#song1 .song-artist').text(artistList[0]); // for song1 having aritist artistList[0] will be diplayed in front of song1
//   $('#song2 .song-artist').text(artistList[1]); // for song2 having aritist artistList[1] will be diplayed in front of song2
//    $('#song3 .song-artist').text(artistList[2]); // for song3 having aritist artistList[2] will be diplayed in front of song3
//  $('#song4 .song-artist').text(artistList[3]); // for song4 having aritist artistList[3] will be diplayed in front of song4
//   $('#song5 .song-artist').text(artistList[4]); // for song5 having aritist artistList[4] will be diplayed in front of song5
//   $('#song6 .song-artist').text(artistList[5]); // for song6 having aritist artistList[5] will be diplayed in front of song6
//   $('#song7 .song-artist').text(artistList[6]); // for song7 having aritist artistList[6] will be diplayed in front of song7


//alternative but short method for replacing above code to decrease the length of code by implementing everything in a single function 
function addSongNameClickEvent(songObj,position) //its a function in which user can enter there desired choice where user can tell the position and name of the song
{
    var songName = songObj.fileName;
    var id = '#song' + position; //adding positon with song is placed in variable id which will generate the id for each song
$(id).click(function() //id here is nuthing but #song1 or 2 or 3.... and click
 {
var audio = document.querySelector('audio');
var currentSong = audio.src; //storing the current track in variable currentSong
if(currentSong.search(songName) != -1)
{
toggleSong();
}
else {
audio.src = songName;
toggleSong();
changeCurrentSongDetails(songObj); //changeCurrentSongDetail function is calling is songObj which we created to run its function
}
});
}

//  addSongNameClickEvent(fileNames[0],1); //function is called with songName and position
//  addSongNameClickEvent(fileNames[1],2); //function is called with songName and position
//  addSongNameClickEvent(fileNames[2],3); //function is called with songName and position
//  addSongNameClickEvent(fileNames[3],4); //function is called with songName and position
//  addSongNameClickEvent(fileNames[4],5); //function is called with songName and position
//  addSongNameClickEvent(fileNames[5],6); //function is called with songName and position
// addSongNameClickEvent(fileNames[6],7); //function is called with songName and position

//loop

//for(var i =0; i < songList.length;i++) {
       // var name = '#song' + (i+1);
       // var song = $(name);
    //     song.find('.song-name').text(songList[i]);
    //     song.find('.song-artist').text(artistList[i]);
    //     song.find('.song-album').text(albumList[i]); // Added
    //     song.find('.song-length').text(durationList[i]); // Added
    // }

 //for (var i = 0; i < fileNames.length ; i++) 
 // {
 //     addSongNameClickEvent(fileNames[i],i+1);
 // } 

//machine or function made for adding images if the song played with thier relative details
function changeCurrentSongDetails(songObj) //function bana dia hai jisme songObj object pass hora
{
    $('.current-song-image').attr('src','img/' + songObj.image) //selcting the current image of the song and attaching the attitube source to it via attr('scr')
    $('.current-song-name').text(songObj.name) //current song ka name display hoga
    $('.current-song-album').text(songObj.album) //current song ka album name display hoga
    $('.current-song-artist').text(songObj.artist) //current song ke artist name display hoga
}
//machine or function made for adding images if the song played with thier relative details
for(var i =0; i < songs.length;i++) //for loop starts
{
        var obj = songs[i]; //array songs having details of each song is passed into a array form having its object obj
        var name = '#song' + (i+1); //since i+1=1 for the first song so it will be song1 for the first iteration
        var song = $(name); //selection of song name using jquery $
        song.find('.song-name').text(obj.name); //name of song is found and displayed
        song.find('.song-artist').text(obj.artist); //name of artist for the relative song is also display along with rest of the detailing
        song.find('.song-album').text(obj.album); //name of album for the relative song is displayed along with other details
        song.find('.song-length').text(obj.duration); //similarly for the upcoming details will be attached
        addSongNameClickEvent(obj,i+1) //iteraton of song list with i+1 to move forward in the list is done
    }


updateCurrentTime(); //as soon as screen is refreshed the time is updated there itself
setInterval(function() { //after this starts the interval
updateCurrentTime(); //at every 5 sec we get our time updated
},5000);
}




