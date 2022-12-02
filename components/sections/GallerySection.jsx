import React, {useRef} from 'react';
import Wrapper from '../wrappers/Wrapper';


function GallerySection() {
  const images = [
    {image:'/assets/team/couple_hiking.webp',
    link:'https://cdn.discordapp.com/attachments/1040583088620703865/1044662716691910736/couple_hiking.webp'},
    {image:'/assets/team/Doe_in_alife_jacket.webp',
    link:'https://cdn.discordapp.com/attachments/1040583088620703865/1044662717170073600/Doe_in_alife_jacket.webp'},
    {image:'/assets/team/outdoor_presentation.webp',
    link:'https://cdn.discordapp.com/attachments/1040583088620703865/1044662717497217055/outdoor_presentation.webp'},
    {image:'/assets/team/round_table_seminar.webp',
    link:'https://cdn.discordapp.com/attachments/1040583088620703865/1044662717790826596/round_table_seminar.webp'},
    {image:'/assets/team/team_having_fun.webp',
    link:'https://cdn.discordapp.com/attachments/1040583088620703865/1044662718071849080/team_having_fun.webp'},
    {image:'/assets/team/team_of_4.webp',
    link:'https://cdn.discordapp.com/attachments/1040583088620703865/1044662716352184370/team_of_4.webp'},
    {image:'/assets/team/team_night_out.webp',
    link:'https://cdn.discordapp.com/attachments/1040583088620703865/1044662718763909210/team_night_out.webp'},
    {image:'/assets/team/team_night_out.webp',
    link:'https://cdn.discordapp.com/attachments/1040583088620703865/1044662718763909210/team_night_out.webp'},
    {image:'/assets/team/Team_night_out_chatting.webp',
    link:'https://cdn.discordapp.com/attachments/1040583088620703865/1044662719225270373/Team_night_out_chatting.webp'},
  ]
    
    const imageNum = useRef(0)
    const canvasRef = useRef(null)
    const prevImage = useRef(null);
    const prevPosition = useRef(null)
    const prevContext = useRef(null)

  
    
    const createImages= async(event)=>{
      const { innerWidth: width, innerHeight: height } = window;
      const bgImage = new Image();
      bgImage.src='/assets/images/bgImage.PNG'
      if(Math.abs(event.movementX)>=5||Math.abs(event.movementY)>=5||width<900){
     const image = new Image();
     if(imageNum.current===images.length){
      imageNum.current =0;
     }
     image.src = images[imageNum.current].link
     imageNum.current +=1
     const canvas = canvasRef.current
     const context = canvas.getContext('2d')
     
    function resizeImage() {
      const ratio = devicePixelRatio||1
      canvas.width = innerWidth * ratio;
      canvas.height = innerHeight * ratio;
    }
    if(!prevImage.current){
      onresize = resizeImage();
    }
    let posx = prevPosition.current?.offx;
    let posy = prevPosition.current?.offy;


    
    const offx = event.nativeEvent.offsetX;
    const offy = event.nativeEvent.offsetY;
    if(prevImage)
    await prevContext.current?.drawImage(bgImage,posx,posy, prevImage.current.width, prevImage.current.height)
    await context.drawImage(image,offx,offy, image.width, image.height )
      prevPosition.current = {offx:offx, offy:offy};
      prevImage.current = image;
      prevContext.current = context
    }
    }
    const clickHandler = ()=>{
    }
    // canvasRef.current?.addEventListener('click', createImages)

  return (
    <Wrapper>
      <div className='' id='canva'>
        <canvas  ref={canvasRef} className='h-[856px] max-h-screen mb-[111px] scale-100 w-full mx-auto border-2 ' onClick={createImages} onMouseMove={createImages} >
    
        </canvas></div>
    </Wrapper>
  )
}

export default GallerySection