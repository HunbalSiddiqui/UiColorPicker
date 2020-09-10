import React from 'react'
import './LandingPage.css'
import NavBar from '../Components/NavBar'
import ColorBox from '../Components/ColorBox/ColorBox'
import { RockingRed, BeautifulBlue, GolfGreen, HappyYellow, BalancedGray, BeFunky } from '../Utility/ColorClasses'
export default function LandingPage() {
    return (
        <div className="landingPageWrapper">
            <div>
                <NavBar title="UIColor Picker" description="Click to copy color" />
            </div>
            <div className="colorLists">
                <div className="colorRod">
                    <div className="colorName"><h1>Rocking Red</h1></div>
                    <div className="colorBoxesRod flex">
                        {
                            RockingRed.map((color,index)=><ColorBox key={index} srcColor={color} />)   
                        }
                    </div>
                </div>
                <div className="colorRod">
                    <div className="colorName"><h1>Reliable Blue</h1></div>
                    <div className="colorBoxesRod flex">
                        {
                            BeautifulBlue.map((color,index)=><ColorBox key={index}  srcColor={color} />)   
                        }
                    </div>
                </div>
                <div className="colorRod">
                    <div className="colorName"><h1>Fertile Green</h1></div>
                    <div className="colorBoxesRod flex">
                        {
                            GolfGreen.map((color,index)=><ColorBox key={index}   srcColor={color}/>)   
                        }
                    </div>
                </div>
                <div className="colorRod">
                    <div className="colorName"><h1>Happy Yellow</h1></div>
                    <div className="colorBoxesRod flex">
                        {
                            HappyYellow.map((color,index)=><ColorBox key={index} srcColor={color}/>)   
                        }
                    </div>
                </div>
                <div className="colorRod">
                    <div className="colorName"><h1>Balanced Gray</h1></div>
                    <div className="colorBoxesRod flex">
                        {
                            BalancedGray.map((color,index)=><ColorBox key={index} srcColor={color}/>)   
                        }
                    </div>
                </div>
                <div className="colorRod">
                    <div className="colorName"><h1>Be Funky</h1></div>
                    <div className="colorBoxesRod flex">
                        {
                            BeFunky.map((color,index)=><ColorBox key={index} srcColor={color}/>)   
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
