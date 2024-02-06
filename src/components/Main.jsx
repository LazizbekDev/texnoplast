import React, {Suspense, useRef, useState} from 'react';
import {Canvas} from "@react-three/fiber";
import {Model} from "./Scene.jsx";
import {OrbitControls} from "@react-three/drei";
import Selector from "./Select.jsx";
import {countries, filler, metal, thickness} from "./selectValues.js";
import Popup from "./Popup.jsx";
import {RxWidth} from "react-icons/rx";
import {AiOutlineColumnWidth} from "react-icons/ai";
import {RiLineHeight} from "react-icons/ri";

const Main = () => {
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
    const [square, setSquare] = useState(0)
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        setSquare(formData.get('width') * formData.get('height'));
    }
    return (
        <form onSubmit={submitHandler}>

            <label
                id="listbox-label"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Характеристика
            </label>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">

                <Selector handleChange={handleChange} options={countries} selectedPanel={selectedPanel}/>
                <Selector handleChange={handleMetal} options={metal} selectedPanel={selectMetal}/>
                <Selector handleChange={(e) => setFiller(e)} options={filler} selectedPanel={selectFiller}/>
                <Selector handleChange={(e) => setMetalThickness(e)} options={thickness}
                          selectedPanel={metalThickness}/>

                <div className="flex items-center">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <AiOutlineColumnWidth  />
                        </div>
                        <input
                            type="number"
                            id="simple-search"
                            name={"width"}
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
                            <RxWidth />
                        </div>
                        <input
                            type="number"
                            id="simple-search"
                            required
                            name={"height"}
                            className="border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                            placeholder="длина"/>
                    </div>
                </div>

                <div className="flex items-center">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <RiLineHeight />
                        </div>
                        <input
                            type="number"
                            id="simple-search"
                            className="border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                            placeholder="высота"
                        />
                    </div>
                </div>
            </div>

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
                                    type={"button"}
                                />
                                <button
                                    className={"bg-[#96301c] shadow-md color-picker"}
                                    onClick={() => setRoof("#96301c")}
                                    type={"button"}
                                />
                                <button
                                    className={"bg-[#2a8152] shadow-md color-picker"}
                                    onClick={() => setRoof("#2a8152")}
                                    type={"button"}
                                />
                                <button
                                    className={"bg-[#595959] shadow-md color-picker"}
                                    onClick={() => setRoof("#9d9d9d")}
                                    type={"button"}
                                />
                                <button
                                    className={"bg-[#4d3106] shadow-md color-picker"}
                                    onClick={() => setRoof("#935b0a")}
                                    type={"button"}
                                />
                            </div>
                        </div>
                        <div className={'flex justify-between items-center my-4'}>
                            <h3>Стены</h3>
                            <div className="grid grid-cols-5 gap-4">
                                <button
                                    onClick={() => setWalls("#fff8a6")}
                                    type={"button"}
                                    className={"color-picker bg-[#fff8a6] shadow-md"}/>
                                <button
                                    onClick={() => setWalls("#cbcbcb")}
                                    type={"button"}
                                    className={"color-picker bg-[#cbcbcb] shadow-md"}/>
                                <button
                                    onClick={() => setWalls("#4295ff")}
                                    type={"button"}
                                    className={"color-picker bg-[#4295ff] shadow-md"}/>
                                <button
                                    onClick={() => setWalls("#915909")}
                                    type={"button"}
                                    className={"color-picker bg-[#6b3e01] shadow-md"}/>
                                <button
                                    onClick={() => setWalls("#bd1414")}
                                    type={"button"}
                                    className={"color-picker bg-[#860202] shadow-md"}/>
                            </div>
                        </div>
                        <button
                            type="submit"
                            onClick={() => setOpen(true)}
                            className="inline-flex w-full justify-center rounded-none bg-[#DE5801] px-3 py-2 text-sm font-semibold shadow-md text-black hover:bg-yellow-500 sm:w-auto">
                            Считать цена
                        </button>
                        <Popup
                            open={open}
                            square={square}
                            close={() => setOpen(false)}
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Main;