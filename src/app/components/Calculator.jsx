"use client";

import { useState } from "react";
import "./calculator.css";

export default function Calculator() {
    const [result, setResult] = useState("0");

    function handleClick(event) {
        const value = event.currentTarget.textContent;

        if (value === "=") {
            try {
                // eslint-disable-next-line no-eval
                const evaluatedResult = eval(result);
                setResult(evaluatedResult.toString());
            } catch (error) {
                setResult("Error");
            }
        } else if (value === "C") {
            setResult("0");
        } else {
            setResult((prev) => (prev === "0" ? value || "" : prev + value));
        }
    }

    return (
        <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
            <main className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center py-16 md:py-32 px-16 bg-white dark:bg-black">
                <h1 className="text-2xl font-bold mb-4">Calculator App</h1>
                <div className="calculator">
                    <div className="display-wrapper">
                        <div className="display-view">{result}</div>
                    </div>
                    <div className="buttons-wrapper">
                        <div className="specials">
                            <button className="clear" onClick={handleClick}>
                                C
                            </button>
                        </div>
                        <div className="buttons">
                            <button className="btn" onClick={handleClick}>
                                7
                            </button>
                            <button className="btn" onClick={handleClick}>
                                8
                            </button>
                            <button className="btn" onClick={handleClick}>
                                9
                            </button>
                            <button className="btn operator" onClick={handleClick}>
                                /
                            </button>

                            <button className="btn" onClick={handleClick}>
                                4
                            </button>
                            <button className="btn" onClick={handleClick}>
                                5
                            </button>
                            <button className="btn" onClick={handleClick}>
                                6
                            </button>
                            <button className="btn operator" onClick={handleClick}>
                                *
                            </button>

                            <button className="btn" onClick={handleClick}>
                                1
                            </button>
                            <button className="btn" onClick={handleClick}>
                                2
                            </button>
                            <button className="btn" onClick={handleClick}>
                                3
                            </button>
                            <button className="btn operator" onClick={handleClick}>
                                -
                            </button>

                            <button className="btn" onClick={handleClick}>
                                0
                            </button>
                            <button className="btn" onClick={handleClick}>
                                .
                            </button>
                            <button className="btn equals" onClick={handleClick}>
                                =
                            </button>
                            <button className="btn operator" onClick={handleClick}>
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
