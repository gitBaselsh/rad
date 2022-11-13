class radio {
    constructor(){
    var main_box= document.getElementById("main_box");
    main_box.style.height=screen.height+"px";

    if(screen.width<500){
        main_box.style.width=screen.width+"px"
    }
    var may=document.getElementById("my_div");
    may.style.height=screen.height-300+"px";






    this.musice=document.getElementById("musice");
    this.img_play=document.getElementById("player_img");
    this.title=document.getElementById("title");
    this.next_in=document.getElementById("next");
    this.isplayedd=false;
    this.server=0;
  this.img_play.addEventListener("click",()=>{
    this.playy_adoiu();


  });




this.title_name=[];
this.title_name[0]="اذاعة فلسطين";
this.title_name[1]="صوت النقب";
this.title_name[2]=" اذاعة القدس";
this.title_name[3]="اذاعة الشباب";
this.title_name[4]=" اذاعة الاسرى";
this.title_name[5]="اذاعة الخليل";
this.title_name[6]="اذاعة القران الكريم";
this.title_name[7]="راديو مرح";
this.title_name[8]="راديو البلد";
this.title_name[9]="راديو اجيال";



this.servere=[];
this.servere[0]="http://46.43.69.146:8008/;stream.nsv&type=mp3"
this.servere[1]="http://188.165.0.118:8000/;stream.mp3&13202692901&duration=99999&id=scplayer&autostart=true";
this.servere[2]="http://live.alboraq.ps:8000/;stream.mp3";
this.servere[3]="https://server.radiowsla.net/8006/stream";
this.servere[4]="https://live.asravoice.ps/stream.mp3";
this.servere[5]="http://streaming.zaytonatube.com:8000/HebronRadio.aac;duration=99999&id=scplayer&autostart=true";
this.servere[6]="http://www.quran-radio.org:8002/;stream.mp3&13202692901&duration=99999&id=scplayer&autostart=true";
this.servere[7]="http://rs.hadara.ps:8056/;stream.mp3";
this.servere[8]="http://live.masterweb-ps.com:8006/;mp3";
this.servere[9]="http://streamer.mada.ps:8008/AJYAL";

this.set_sorce();


this.next_in.addEventListener("click",()=>{

if(this.server<this.servere.length-1){
    ++this.server;
   
    this.isplayedd=true;
    
}else {
    this.server=0;
}
this.set_sorce();
this.playy_adoiu();
    
})
document.getElementById("back").addEventListener("click", ()=>{
    if(this.server>0){
        --this.server;
        this.isplayedd=true;

    }else{
        this.server=this.servere.length-1;
    }
    this.set_sorce();
this.playy_adoiu();
})












}



set_sorce(){
    this.musice.src=this.servere[this.server];
    this.title.innerHTML=this.title_name[this.server];
this.playy_adoiu();

}



playy_adoiu(){

    if(this.isplayedd == false){
        this.img_play.src="./img/pause.png";
        this.musice.play();
        this.isplayedd=true;
    }else if(this.isplayedd == true){

        this.img_play.src="./img/buse.png"
        this.musice.pause();
        this.isplayedd=false;
    }
}
}
onload=new radio();