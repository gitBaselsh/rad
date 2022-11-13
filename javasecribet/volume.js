class volume{

constructor(){


    this.musice=document.getElementById("musice");
    this.musice.volume=50/100;

    this.level_vol=document.getElementById("vol_ado");
    this.level=addEventListener("change",()=>{
       musice.volume=this.level_vol.value/100;

    })





}





}
onload=new volume();