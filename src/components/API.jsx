// Test of outdooractive's API
import React, { useState, useEffect } from "react";
import xml2js from "xml2js";

export const API = () => {
    const [data, setData] = useState([]);
    const apiUrl = "https://www.outdooractive.com/api/project/api-dev-oa/tours/?key=yourtest-outdoora-ctiveapi&lang=eng";
    
    const test = xml2js.parseString()
}