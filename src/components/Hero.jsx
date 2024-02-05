import React, {Suspense, useRef, useState} from 'react';
import {Canvas} from "@react-three/fiber";
import {Model} from "./Scene.jsx";
import {OrbitControls} from "@react-three/drei";
import Selector from "./Select.jsx";
import {countries, filler, metal, thickness} from "./openValues.js";
import Contact from "./Contact.jsx";

const Hero = () => {
    const ref = useRef();
    const [roof,setRoof] = useState("#9d9d9d")
    const [walls,setWalls] = useState("#cbcbcb")
    const [open, setOpen] = useState(false)
    const [selectedPanel, setSelectedPanel] = useState(countries[0]);
    const [selectMetal, setMetal] = useState(metal[0]);
    const [selectFiller, setFiller] = useState(filler[0]);
    const [metalThickness, setMetalThickness] = useState(thickness[0]);
    const handleChange = (value) => setSelectedPanel(value);
    const handleMetal = (value) => setMetal(value);

    return (
        <>

            <label
                id="listbox-label"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Характеристика
            </label>
            <form className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">

                <Selector handleChange={handleChange} options={countries} selectedPanel={selectedPanel}/>
                <Selector handleChange={handleMetal} options={metal} selectedPanel={selectMetal}/>
                <Selector handleChange={(e) => setFiller(e)} options={filler} selectedPanel={selectFiller}/>
                <Selector handleChange={(e) => setMetalThickness(e)} options={thickness}
                          selectedPanel={metalThickness}/>

                <div className="flex items-center">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <img src={"https://maxproduct.uz/wp-content/themes/maxproduct/calc/img/height.svg"}
                                 alt="s-logo" className="selected-logo w-7 bg-[#DE5A03] mr-2"/>
                        </div>
                        <input
                            autoFocus={true}
                            type="number"
                            id="simple-search"
                            className="border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                            placeholder="ширина"
                            required
                        />
                    </div>
                </div>

                <div className="flex items-center">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <img src={"https://maxproduct.uz/wp-content/themes/maxproduct/calc/img/height.svg"}
                                 alt="s-logo" className="selected-logo w-7 bg-[#DE5A03] mr-2"/>
                        </div>
                        <input
                            autoFocus={true}
                            type="number"
                            id="simple-search"
                            className="border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                            placeholder="длина"
                            required
                        />
                    </div>
                </div>

                <div className="flex items-center">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <img src={"https://maxproduct.uz/wp-content/themes/maxproduct/calc/img/height.svg"}
                                 alt="s-logo" className="selected-logo w-7 bg-[#DE5A03] mr-2"/>
                        </div>
                        <input
                            autoFocus={true}
                            type="number"
                            id="simple-search"
                            className="border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                            placeholder="высота"
                            required
                        />
                    </div>
                </div>
            </form>

            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Canvas style={{ height: "70vh" }} className={"canvas"}>
                        <mesh ref={ref}>
                            <Suspense fallback={null}>
                                <OrbitControls enableZoom={true}/>
                                <ambientLight/>
                                <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow/>
                                <Model roofColor={roof} wallColor={walls}/>
                            </Suspense>
                        </mesh>
                    </Canvas>
                    <div className={"md:w-96 sm:w-80 w-64"}>
                        <h2 className="text-3xl font-light w-full">Цвет панелей</h2>
                        <div className={'flex justify-between items-center'}>
                            <h3>Кровля</h3>
                            <div className="grid grid-cols-5 gap-4">
                                <button
                                    className={"bg-[#fffcf5] rounded-none shadow-md color-picker"}
                                    onClick={() => setRoof("#fffcf5")}
                                />
                                <button
                                    className={"bg-[#96301c] shadow-md color-picker"}
                                    onClick={() => setRoof("#96301c")}
                                />
                                <button
                                    className={"bg-[#2a8152] shadow-md color-picker"}
                                    onClick={() => setRoof("#2a8152")}
                                />
                                <button
                                    className={"bg-[#595959] shadow-md color-picker"}
                                    onClick={() => setRoof("#9d9d9d")}
                                />
                                <button
                                    className={"bg-[#4d3106] shadow-md color-picker"}
                                    onClick={() => setRoof("#935b0a")}
                                />
                            </div>
                        </div>
                        <div className={'flex justify-between items-center my-4'}>
                            <h3>Стены</h3>
                            <div className="grid grid-cols-5 gap-4">
                                <button
                                    onClick={() => setWalls("#fff8a6")}
                                    className={"color-picker bg-[#fff8a6] shadow-md"}/>
                                <button
                                    onClick={() => setWalls("#cbcbcb")}
                                    className={"color-picker bg-[#cbcbcb] shadow-md"}/>
                                <button
                                    onClick={() => setWalls("#4295ff")}
                                    className={"color-picker bg-[#4295ff] shadow-md"}/>
                                <button
                                    onClick={() => setWalls("#915909")}
                                    className={"color-picker bg-[#6b3e01] shadow-md"}/>
                                <button
                                    onClick={() => setWalls("#bd1414")}
                                    className={"color-picker bg-[#860202] shadow-md"}/>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-none text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">калькулятор
                        </button>
                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="focus:outline-none text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-yellow-300 font-medium rounded-none text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                            Считать цена
                        </button>
                        <Contact open={open} close={() => setOpen(false)} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;