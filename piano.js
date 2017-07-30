<script>
alert("hey there! please play me but use caplocks ");
window.onload function(){

var piano=Synth.createInstrument('piano'); //piano is intialized here using Synth syntax
$(#key_1).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('C',3,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 81) //code for Q is 81
	{
		piano.play('C',3,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});

$(#key_2).on('click',fuction(){
	piano.play('D',3,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 87) //code for W is 87
	{
		piano.play('D',3,2);
	}
});
$(#key_3).on('click',fuction(){
	piano.play('E',3,2);
}); 
('body').on('keypress',function(event){
	if(event.keycode == 69) //code for E is 69
	{
		piano.play('E',3,2);
	}
});


$(#key_4).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('F',3,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 81)
	{
		piano.play('F',3,2);
	}
});

$(#key_5).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('G',3,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 89) //code for Q is 81
	{
		piano.play('C',3,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});
$(#key_6).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('A',3,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 87) //code for Q is 81
	{
		piano.play('A',3,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});
$(#key_7).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('B',3,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 85) //code for Q is 81
	{
		piano.play('B',3,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});

$(#key_8).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('C',4,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 73) //code for Q is 81
	{
		piano.play('C',4,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});

$(#key_9).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('D',4,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 79) //code for Q is 81
	{
		piano.play('D',4,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});

$(#key_10).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('E',4,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 80) //code for Q is 81
	{
		piano.play('E',4,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});

$(#key_11).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('F',3,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 91) //code for Q is 81
	{
		piano.play('F',3,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});

$(#key_12).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('G',3,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 93) //code for Q is 81
	{
		piano.play('G',3,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});

$(#key_13).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('A',4,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 90) //code for Q is 81
	{
		piano.play('A',4,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});

$(#key_14).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('B',4,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 88) //code for Q is 81
	{
		piano.play('B',4,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});
$(#key_15).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('C',5,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 67) //code for Q is 81
	{
		piano.play('C',5,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});

$(#key_16).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('D',5,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 86) //code for Q is 81
	{
		piano.play('D',5,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});

$(#key_17).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('E',5,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 66) //code for Q is 81
	{
		piano.play('E',5,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});

$(#key_18).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('F',5,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 78) //code for Q is 81
	{
		piano.play('F',5,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});

$(#key_19).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('G',5,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 77) //code for Q is 81
	{
		piano.play('G',5,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});

$(#key_20).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('A',5,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 44) //code for Q is 81
	{
		piano.play('A',5,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});

$(#key_21).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('B',5,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 46) //code for Q is 81
	{
		piano.play('B',5,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});

$(#key-1).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('C#',3,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 50) //code for Q is 81
	{
		piano.play('C#',3,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});

$(#key-2).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('D#',3,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 51) //code for Q is 81
	{
		piano.play('D#',3,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});

$(#key-3).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('E#',3,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 53) //code for Q is 81
	{
		piano.play('E#',3,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});
$(#key-4).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('F#',3,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 54) //code for Q is 81
	{
		piano.play('F#',3,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});
$(#key-5).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('G#',3,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 55) //code for Q is 81
	{
		piano.play('F#',3,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});
$(#key-6).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('G#',3,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 57) //code for Q is 81
	{
		piano.play('G#',3,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});
$(#key-7).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('A#',3,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 187) //code for Q is 81
	{
		piano.play('A#',3,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});

$(#key-8).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('B#',3,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 65) //code for Q is 81
	{
		piano.play('B#',3,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});

$(#key-9).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('C#',3,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 83) //code for Q is 81
	{
		piano.play('C#',4,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});

$(#key-10).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('D#',4,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 83) //code for Q is 81
	{
		piano.play('D#',4,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});

$(#key-11).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('E#',4,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 70) //code for Q is 81
	{
		piano.play('E#',4,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});

$(#key-12).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('F#',4,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 71) //code for Q is 81
	{
		piano.play('F#',4,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});

$(#key-13).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('A#',4,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 74) //code for Q is 81
	{
		piano.play('A#',4,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});
$(#key-14).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('B#',4,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 75) //code for Q is 81
	{
		piano.play('B#',4,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});
$(#key-15).on('click',fuction(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('C#',5,2);
});
('body').on('keypress',function(event){
	if(event.keycode == 76) //code for Q is 81
	{
		piano.play('C#',5,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});


}
</script>