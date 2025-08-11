import './HeroSection.css';
import Starburst from '../Starburst';

import tvCharacter from '../../assets/cartoonJustin.png';

function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <svg id="heroText" data-name="Hero Text" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.07 750">
              <path d="M767.24,495.41c-8.68,53.43-13.01,80.15-33.41,100.39-17.88,17.74-40.03,22.66-53.88,25.31-169.7,32.44-544.52,77.66-637.38,2.67C-13.1,578.82-11.56,99.07,32.01,30.38,57.12-9.2,265.43-2.26,287.3,7.86c43.4,20.08,32.96,48.06,43.15,55.3,0,0,2.28,1.25,5.39,1.72,26.05,3.98,422.37-48.36,470.57,29.3,13.51,21.78,4.73,78.69-12.83,192.51-.95,6.18-3.8,23.87,5.56,31.66,10.29,8.57,32.02,2.39,33.51,8.02.64,2.4-2.85,5.22-1.63,6.8,1.43,1.84,6.62-1.44,9,.77,1.88,1.75.74,5.77.42,6.89-1.38,4.83-5.66,9.4-11.14,11.01-5.94,1.75-8.44-1.4-11.77.92-4.3,3-1.85,9.48-5.82,11.63-2.78,1.51-4.65-1.32-11.23-1.45-1.54-.03-7.8-.15-12.36,3.55-3.91,3.17-4.92,7.86-5.47,10.18" fill="#e2d4b2"/>
              <text transform="translate(62.62 91.62)" fill="#a83216" font-family="JosefinSansRoman-SemiBold, &apos;Josefin Sans&apos;" font-size="72" font-variation-settings="&apos;wght&apos; 600" font-weight="600"><tspan x="0" y="0">Hi, I’m</tspan></text>
              <text transform="translate(69.81 253.3)" fill="#2d7569" font-family="IntervogueSoftAlt-Black, &apos;Intervogue Soft Alt&apos;" font-size="188" font-weight="800"><tspan x="0" y="0">JUSTIN</tspan></text>
              <text transform="translate(16.67 356.74)" fill="#a83216" font-family="Pacifico-Regular, Pacifico"><tspan x="0" y="0" font-size="95.05" letter-spacing="-.2em">F</tspan><tspan x="48.86" y="0" font-size="63.07">ull </tspan><tspan x="135.83" y="0" font-size="53.3" letter-spacing="0em">-</tspan><tspan x="157.31" y="0" font-size="91.5" letter-spacing="-.01em">S</tspan><tspan x="219.62" y="0" font-size="63.07">tack</tspan><tspan x="330.37" y="0" font-size="53.3"> </tspan><tspan x="344.49" y="0" font-size="95.05" letter-spacing="-.05em">W</tspan><tspan x="455.13" y="0" font-size="63.07">eb </tspan><tspan x="526.47" y="0" font-size="95.05" letter-spacing="-.08em">D</tspan><tspan x="598.71" y="0" font-size="63.07" letter-spacing="0em">e</tspan><tspan x="623.81" y="0" font-size="63.07">veloper</tspan></text>
              <text transform="translate(30.61 404.81)" font-family="JosefinSansRoman-Medium, &apos;Josefin Sans&apos;" font-size="54" font-variation-settings="&apos;wght&apos; 500" font-weight="500"><tspan x="0" y="0" letter-spacing="-.08em">Just What </tspan><tspan x="222.1" y="0" letter-spacing="-.18em">Y</tspan><tspan x="249.91" y="0" letter-spacing="-.08em">our </tspan><tspan x="330.96" y="0" letter-spacing="-.17em">W</tspan><tspan x="376.43" y="0" letter-spacing="-.08em">ebsite O</tspan><tspan x="552.46" y="0" letter-spacing="-.09em">r</tspan><tspan x="568.07" y="0" letter-spacing="-.08em">de</tspan><tspan x="620.67" y="0" letter-spacing="-.09em">r</tspan><tspan x="636.27" y="0" letter-spacing="-.08em">ed!</tspan></text>
              <text transform="translate(71.55 466.65)" font-family="JosefinSansRoman-Regular, &apos;Josefin Sans&apos;" font-size="39" font-variation-settings="&apos;wght&apos; 400"><tspan x="0" y="0" letter-spacing="-.07em">I whip up sleek, </tspan><tspan x="231.11" y="0" letter-spacing="-.09em">r</tspan><tspan x="242.19" y="0" letter-spacing="-.07em">esponsi</tspan><tspan x="349.86" y="0" letter-spacing="-.08em">v</tspan><tspan x="365.85" y="0" letter-spacing="-.07em">e </tspan><tspan x="392.68" y="0" letter-spacing="-.08em">w</tspan><tspan x="415.69" y="0" letter-spacing="-.07em">ebsites using </tspan><tspan x="0" y="53" letter-spacing="-.07em">the full MERN stack. </tspan><tspan x="316.83" y="53" letter-spacing="-.18em">T</tspan><tspan x="332.43" y="53" letter-spacing="-.07em">opped off with clean </tspan><tspan letter-spacing="-.07em"><tspan x="0" y="106">code, custom flair, and just the right amount </tspan></tspan><tspan x="0" y="159" letter-spacing="-.07em">of </tspan><tspan x="39.7" y="159" letter-spacing="-.08em">r</tspan><tspan x="51.09" y="159" letter-spacing="-.07em">azzle-dazzle.</tspan></text>
              <foreignObject x="75" y="640" width="450" height="100">
                <button className="cta-button">VIEW&nbsp;MY&nbsp;WORK</button>
              </foreignObject>
              <Starburst fill="var(--primary-dark)" x="82%" y="4%" transformScale={1} />


            </svg>

          </div>
          
          <div className="hero-visual">
            <div className="tv-container">

              <svg id="heroTelevision" data-name="Hero Television" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841 664.51">
                <Starburst fill="var(--primary-cream)" x="-2%" y="10%" transformScale={.60} />
                <Starburst fill="var(--primary-cream)" x="-15px" y="550px" transformScale={1} />
        


                <rect
                  id="tvBackground"
                  x="70"
                  y="30"
                  width="690"
                  height="500"
                  rx="40"
                  fill="var(--primary-yellow)"
   
                />
  
                <image
                  href={tvCharacter}
                  x="70"
                  y="70"
                  width="640"
                  height="450"
                  preserveAspectRatio="xMidYMid meet"
                />
        
                <g id="legs">
                  <path d="M159.14,540.32s-36.03,89.82-42.97,96.77c-2.98,2.98-16.09,5.75-16.8-1.13-1.13-10.99,21.65-100.81,21.65-100.81l38.13,5.17Z" stroke="#000" stroke-miterlimit="10" stroke-width="6"/>
                  <path d="M198.72,543.07s-9.92,59.98-6.14,64.62c4.68,5.75,13.85,1.65,15.35,1.29,4.69-1.13,21.97-65.91,21.97-65.91h-31.18Z" stroke="#000" stroke-miterlimit="10" stroke-width="6"/>
                  <path d="M665.93,653.41c3.11,2.95,17.22,8.22,21.32,0,1.78-3.55-11.05-113.02-11.05-113.02l-43.88,2.84s27.3,104.2,33.6,110.18Z" stroke="#000" stroke-miterlimit="10" stroke-width="6"/>
                  <path d="M760.76,615.12c-2.24,7.36-13.94,5.12-16.16,3.72l-48.95-96.93,39.9-12.87s29.08,93.32,25.2,106.08Z" stroke="#000" stroke-miterlimit="10" stroke-width="6"/>
                </g>
                <path d="M789.59,74.65C769.22-23.67,128.44-7.35,86.27,31.25c-52.26,47.83-46.2,465.04-4.43,497.81,40.44,31.73,651.13,65.14,698.89-23.03,23.03-42.52,34.49-307.66,8.86-431.38ZM630.39,490.26c-50.02,31.26-169.96,13.64-293.87,15.35-20.43.28-165.98-7.39-195.54-14.21-9.97-2.3-19.34-6.98-28.94-23.74,0,0-14.83-37.65-15.76-86.99,0-.34.03-.44.03-.66h0c-3.65-40.95-3.81-139.95-1.77-164.41,1.54-18.49-.74-113.09,31.59-142.72,22.54-20.66,71.79-21.9,71.79-21.9,10.21-.24,57.88-2.69,76.37-3.56,14.75-.69,111.96.35,140.32,2.33,14.39,1,136.04,2.46,176.67,10.47,32.24,6.35,58.62,15.78,68.1,35.69,15.77,33.14,14.21,109,15.35,180.06,1.85,115.42-8.87,192.13-44.34,214.3Z" fill="#2d7569" stroke="#000" stroke-miterlimit="10" stroke-width="6"/>
                <path id="tvScreen" d="M126.13,72.88c22.54-20.66,71.79-21.9,71.79-21.9,10.21-.24,57.88-2.69,76.37-3.56,14.75-.69,111.96.35,140.32,2.33,14.39,1,136.04,2.46,176.67,10.46,32.24,6.35,58.62,15.78,68.1,35.69,15.77,33.14,14.21,109,15.35,180.06,1.85,115.42-8.87,192.13-44.34,214.3-50.02,31.26-169.96,13.64-293.87,15.35-20.43.28-165.98-7.39-195.54-14.21-9.97-2.3-19.34-6.98-28.94-23.74,0,0-14.83-37.65-15.76-86.99,0-.34.03-.44.03-.66h0c-3.65-40.95-3.81-139.95-1.77-164.41,1.54-18.49-.74-113.09,31.59-142.72Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="6"/>
                <path id="tvSide" d="M618.14,12.31s85.47,22.17,95.82,46.73c28.28,67.11,22.74,445.71-11.38,466.47-19.15,11.65-84.44,30.22-84.44,30.22l89.48-13.35,57.47-20.97,16.89-14.66,12.12-58.1,6.67-70.52,3.41-124.51-5.09-110.86-11.13-76-17.32-16.98-70.23-25.32-82.26-12.15Z"/>
                <g id="bottomKnob">
                  <circle cx="700" cy="402" r="18.72" stroke="#7a7473" stroke-miterlimit="10" stroke-width="2"/>
                  <rect x="696.76" y="387.32" width="6.48" height="29.36" rx="1" ry="1" transform="translate(1102 -298) rotate(90)" stroke="#7a7473" stroke-miterlimit="10" stroke-width="2"/>
                </g>
                <g id="topKnob">
                  <circle cx="703" cy="352" r="18.72" stroke="#7a7473" stroke-miterlimit="10" stroke-width="2"/>
                  <rect x="700" y="337.32" width="6.48" height="29.36" rx="1" ry="1" transform="translate(454.88 -394.17) rotate(45)" stroke="#7a7473" stroke-miterlimit="10" stroke-width="2"/>
                </g>
                <g id="grill">
                  <g>
                    <rect x="684.28" y="261" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                    <rect x="684.28" y="254" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                    <rect x="684.28" y="247" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                    <rect x="684.28" y="240" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                    <rect x="684.28" y="233" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                    <rect x="684.28" y="226" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                    <rect x="684.28" y="219" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                  </g>
                  <g>
                    <rect x="684.28" y="212" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                    <rect x="684.28" y="205" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                    <rect x="684.28" y="198" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                    <rect x="684.28" y="191" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                    <rect x="684.28" y="184" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                    <rect x="684.28" y="177" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                    <rect x="684.28" y="170" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                  </g>
                </g>
                <Starburst fill="var(--primary-dark)" x="11%" y="12%" transformScale={1.25} />
                <Starburst fill="var(--primary-dark)" x="50%" y="18%" transformScale={1.25} />

                
              </svg>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
