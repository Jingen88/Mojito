import React from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'


const About = () => {


useGSAP(() => {
    const ttitleSplit = SplitText.create('#about h2',{
        type: 'words'
});

const scrollTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#about',
        start: 'top center',
    }

})

scrollTimeline
    .from(ttitleSplit.words, {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        ease: 'expo.out',
        stagger: 0.02
    })
    .from('.top-grid div, .bottom-grid div', {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        ease: 'power1.inOut',
        stagger: 0.04,
    })
})

  return (
    <div id="about">
    <div className='mb-16 md:px:0 px-5'>
        <div className='content'>
            <div className='md:col-span-8'>
                <p className='badge'> Best Cocktails</p>
                <h2>
                    Where every detil matters <span className='text-white'>-</span>
                    from muddle to garnish
                </h2>

            </div>
            <div className='sub-content'>
                <p>
                    Mojito is a cocktail bar that specializes in crafting the perfect mojito. Our expert mixologists use only the freshest ingredients and traditional techniques to create a refreshing and flavorful drink that will transport you to the beaches of Cuba. Whether you prefer a classic mojito or one of our unique variations, we guarantee that every sip will be a taste of paradise.
                </p>
                <div>
                    <p className='md:text-3xl text-xl font-bold'>
                        <span>4.5</span>/5
                    </p>
                    <p className='text-sm text-white-100'>
                        More than +12000 costumers

                    </p>
                </div>

            </div>

        </div>
    </div>
    <div className='top-grid'>
        <div className='md:col-span-3'>
           <div className='noisy'/> 
           <img src='/images/abt1.png' alt='about image 1' />
        </div>

        <div className='md:col-span-6'>
           <div className='noisy'/> 
           <img src='/images/abt2.png' alt='about image 2' />
        </div>

        <div className='md:col-span-3'>
           <div className='noisy'/> 
           <img src='/images/abt5.png' alt='about image 5' />
        </div>
    </div>
    <div className='bottom-grid'>
        <div className='md:col-span-8'>
           <div className='noisy'/> 
           <img src='/images/abt3.png' alt='about image 4' />
        </div>
        <div className='md:col-span-4'>
           <div className='noisy'/> 
           <img src='/images/abt4.png' alt='about image 3' /></div>
    </div>
    </div>
  )
}

export default About