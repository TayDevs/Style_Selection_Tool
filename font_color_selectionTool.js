// READ BEFORE USING
// 1. Set html body tag to have id="body"


// CREATE HTML


    // create HTML elements
        const parentDiv = document.createElement("div");
        const fontDiv = document.createElement("div");
        const fontButtonsDiv = document.createElement("div");
        const colorDiv = document.createElement("div");
        const colorButtonsDiv = document.createElement("div");
        const fontNameP = document.createElement("p");
        const colorCode = document.createElement("p");
        const chooseColorTitleP = document.createElement("p");
        const fMinusButton = document.createElement("button");
        const fPlusButton = document.createElement("button");
        const cMinusButton = document.createElement("button");
        const cPlusButton = document.createElement("button");
        const fontNamePText = document.createTextNode("Font Name");
        const fPlusSign = document.createTextNode("+");
        const fMinusSign = document.createTextNode("-");
        const cPlusSign = document.createTextNode("+");
        const cMinusSign = document.createTextNode("-");
        const chooseColorTitlePText = document.createTextNode("CHOOSE A COLOR");
        const colorCodeText = document.createTextNode("0");


    //assign IDs and classes to newly created elements
        parentDiv.setAttribute("id", "choiceToolDiv");
        fontDiv.setAttribute("id", "fontDiv");
        fontButtonsDiv.setAttribute("id", "fontButtonsDiv");
        colorDiv.setAttribute("id", "colorDiv");
        colorButtonsDiv.setAttribute("id", "colorButtonsDiv");
        fontNameP.setAttribute("id", "fontName");
        colorCode.setAttribute("id", "colorCodeP");
        chooseColorTitleP.setAttribute("id", "chooseColorP");
        fMinusButton.setAttribute("id", "fontMinusButton");
        fPlusButton.setAttribute("id", "fontPlusButton");
        cMinusButton.setAttribute("id", "colorMinusButton");
        cPlusButton.setAttribute("id", "colorPlusButton");
       


    // append children elements to parent elements
        document.getElementById("body").appendChild(parentDiv);

        const getChoiceToolDiv = document.getElementById("choiceToolDiv");
        getChoiceToolDiv.appendChild(fontDiv);
        getChoiceToolDiv.appendChild(colorDiv);
        const getFontDiv = document.getElementById("fontDiv");
        getFontDiv.appendChild(fontNameP);
        getFontDiv.appendChild(fontButtonsDiv);
        const getFontButtonsDiv = document.getElementById("fontButtonsDiv");
        getFontButtonsDiv.appendChild(fMinusButton);
        getFontButtonsDiv.appendChild(fPlusButton);
        const getColorDiv = document.getElementById("colorDiv");
        getColorDiv.appendChild(chooseColorTitleP);
        getColorDiv.appendChild(colorButtonsDiv);
        const getColorButtonsDiv = document.getElementById("colorButtonsDiv");
        getColorButtonsDiv.appendChild(cMinusButton);   
        getColorButtonsDiv.appendChild(cPlusButton);    
        getColorDiv.appendChild(colorCode);
        const getFontName = document.getElementById("fontName");
        getFontName.appendChild(fontNamePText);
        const getFontMinusButton = document.getElementById("fontMinusButton");
        getFontMinusButton.appendChild(fMinusSign);
        const getFontPlusButton = document.getElementById("fontPlusButton");
        getFontPlusButton.appendChild(fPlusSign);
        const getChooseColorP = document.getElementById("chooseColorP");
        getChooseColorP.appendChild(chooseColorTitlePText);
        const getColorMinusButton = document.getElementById("colorMinusButton");
        getColorMinusButton.appendChild(cMinusSign);
        const getColorPlusButton = document.getElementById("colorPlusButton");
        getColorPlusButton.appendChild(cPlusSign);
        const getColorCodeP = document.getElementById("colorCodeP");
        getColorCodeP.appendChild(colorCodeText);





//STYLE HTML
    getChoiceToolDiv.style.width =             "160px";
    getChoiceToolDiv.style.height =            "350px";
    getChoiceToolDiv.style.alignSelf =         "flex-start";
    getChoiceToolDiv.style.display =           "flex";
    getChoiceToolDiv.style.flexDirection =     "column";
    getChoiceToolDiv.style.justifyContent =    "space-around";
    getChoiceToolDiv.style.alignItems =        "center";
    getChoiceToolDiv.style.position =          "fixed"; 
    getChoiceToolDiv.style.left =              "5px";
    getChoiceToolDiv.style.top =               "5px";
    getChoiceToolDiv.style.fontFamily =        "sans-serif";
    getChoiceToolDiv.style.fontSize =          "15px";
    getChoiceToolDiv.style.backgroundColor =   "black";
    getChoiceToolDiv.style.color =             "white";
    getChoiceToolDiv.style.borderRadius =      "10px";
 
    getFontDiv.style.height =                  "30%";
    getFontDiv.style.display =                 "grid";
    getFontDiv.style.gridTemplate =            "2fr 1fr / 1fr";

    getColorDiv.style.height =                 "30%";    
    getColorDiv.style.display =                "grid";
    getColorDiv.style.gridTemplate =           "1fr 1fr 1fr / 1fr";

    getFontButtonsDiv.style.gridArea =         "2 / 1 / 2 / 1";
    getFontButtonsDiv.style.display =           "flex";
    getFontButtonsDiv.style.flexDirection =     "row";
    getFontButtonsDiv.style.justifyContent =    "center";

    getFontName.style.gridArea =                "1 / 1 / 1 / 1";
    getFontName.style.textAlign =               "center";
    getFontName.style.fontSize =                "20px";
    getFontName.style.textDecoration =          "underline";

    getChooseColorP.style.gridArea =            "1 / 1 / 1 / 1";
    getChooseColorP.style.textAlign =           "center";
    getChooseColorP.style.marginTop =           "10px";

    getColorButtonsDiv.style.gridArea =         "2 / 1 / 2 / 1";
    getColorButtonsDiv.style.display =          "flex";
    getColorButtonsDiv.style.justifyContent =   "center";
    getColorButtonsDiv.style.marginTop =        "10px";

    getColorCodeP.style.gridArea =              "3 / 1 / 3 / 1";
    getColorCodeP.style.margin =                "10px 0";
    getColorCodeP.style.textAlign =             "center";
    getColorCodeP.style.fontSize =              "25px";
    getColorCodeP.style.fontWeight =            "500"; 
    getColorCodeP.style.textDecoration =        "underline";

    getFontMinusButton.style.color =            "black";
    getFontMinusButton.style.border =           "none";
    getFontMinusButton.style.borderRadius =     "5px";
    getFontMinusButton.style.fontWeight =       "700";
    getFontMinusButton.style.margin =           "10px 2px 10px 0";
    getFontMinusButton.style.height =           "30px";
    getFontMinusButton.style.width =            "30px";

    getFontPlusButton.style.color =             "black";
    getFontPlusButton.style.border =            "none";
    getFontPlusButton.style.borderRadius =      "5px";
    getFontPlusButton.style.fontWeight =        "700";
    getFontPlusButton.style.margin =            "10px 2px 10px 0";
    getFontPlusButton.style.height =            "30px";
    getFontPlusButton.style.width =             "30px";

    getColorMinusButton.style.color =           "black";
    getColorMinusButton.style.border =          "none";
    getColorMinusButton.style.borderRadius =    "5px";
    getColorMinusButton.style.fontWeight =      "700";
    getColorMinusButton.style.margin =          "10px 2px 10px 0";
    getColorMinusButton.style.height =          "30px";
    getColorMinusButton.style.width =           "30px";

    getColorPlusButton.style.color =            "black";
    getColorPlusButton.style.border =           "none";
    getColorPlusButton.style.borderRadius =     "5px";
    getColorPlusButton.style.fontWeight =       "700";
    getColorPlusButton.style.margin =           "10px 2px 10px 0";
    getColorPlusButton.style.height =           "30px";
    getColorPlusButton.style.width =            "30px";









//TOOL FUNCTIONALITY


    // DO NOT CHANGE! permanent global declarations
        let fontIndex = 0;
        let colorIndex = 0;

    // UPDATE THESE! project-specific global declarations (HTML targets of changes)
        let a = document.getElementById("pusheenHeader");
        let b = document.getElementById("b");
        let c = document.getElementById("c");
        let d = document.getElementById("d");
        let e = document.getElementById("e");
        let f = document.getElementById("f");
        let g = document.getElementById("mainContentTitle");
        let background = document.getElementById("shadowEffect");

    

    // UPDATE TEHSE! font name and color code arrays
        let fonts = ['Arima Madurai', 'Arvo', 'Averia Gruesa Libre', 'Corben', 'Dosis', 'Exo', 'Fresca', 'Istok Web', 'Josefin Sans', 'Marmelad', 'Martel Sans', 'Nova Round', 'Poppins', 'Spinnaker' ];
        //let fonts = ['Arial', 'Caveat Brush', 'Covered By Your Grace', 'Kalam', 'Pacifico', 'Permanent Marker','Rock Salt', 'Schoolbell', 'Sriracha'];
        let colors = ['rgb(0, 0, 0)', 'rgb(155, 6, 68)','rgb(235, 46, 124)', 'rgb(12, 151, 7)', 
        'rgb(49, 231, 255)', 'rgb(116, 206, 218)', 'rgb(116, 218, 210)', 'rgb(116, 218, 147)', 
        'rgb(119, 253, 159)', 'rgb(139, 253, 119)', 'rgb(29, 4, 141)','rgb(144, 241, 114)', 'rgb(181, 245, 161)', 'rgb(181, 241, 125)', 'rgb(113, 5, 87)', 'rgb(138, 64, 121)', 'rgb(122, 13, 117)', 'rgb(255, 0, 98)' ]

    // FONT SELECTION TOOL

        function fontMinus() {
            // Check if array ends, reset index to 0 so user can keep scrolling through beggining of array
            if (fontIndex === 0){
                
                fontIndex = fonts.length;
            }
            //scroll to next array option 
            fontIndex--;


            // UPDATE THESE! HTML elements to display new font
            //a.style.fontFamily = fonts[fontIndex];
            //b.style.fontFamily = fonts[fontIndex];
            //c.style.fontFamily = fonts[fontIndex];
            //d.style.fontFamily = fonts[fontIndex];
            //e.style.fontFamily = fonts[fontIndex];
            //f.style.fontFamily = fonts[fontIndex];
            g.style.fontFamily = fonts[fontIndex];
            
            getFontName.innerHTML = fonts[fontIndex];
        }

        function fontPlus() {
            // Check if array ends, reset index to 0 so user can keep scrolling through beggining of array
            if (fontIndex === fonts.length-1){
                fontIndex = -1; //setting it to 1 makes it skip index 0 when scrolling all the way through the array
            }
            //scroll to next array option 
            fontIndex++;


            // UPDATE THESE! HTML elements to display new font
            //a.style.fontFamily = fonts[fontIndex];
            //b.style.fontFamily = fonts[fontIndex];
            //c.style.fontFamily = fonts[fontIndex];
            //d.style.fontFamily = fonts[fontIndex];
            //e.style.fontFamily = fonts[fontIndex];
            //f.style.fontFamily = fonts[fontIndex];
            g.style.fontFamily = fonts[fontIndex];

            getFontName.innerHTML = fonts[fontIndex];
        }

        // Event listeners for FONT button clicks
        getFontMinusButton.addEventListener("click", fontMinus);
        getFontPlusButton.addEventListener("click", fontPlus);




    // COLOR SELECTION TOOL

        function colorMinus() {
            // Check if array ends, reset index to 0 so user can keep scrolling through beggining of array
            if (colorIndex === 0){
                colorIndex = colors.length;
                
            }
            //scroll to next array option 
            colorIndex--;

            // Update HTML elements to display new color
            background.style.backgroundColor = colors[colorIndex];
            getColorCodeP.innerHTML = colorIndex + 1; 

            //scroll to next array option 
            
        }

        function colorPlus() {
            // Check if array ends, reset index to 0 so user can keep scrolling through beggining of array
            if (colorIndex === colors.length-1){
                console.log(colorIndex);
                colorIndex = -1; //setting it to 1 makes it skip index 0 when scrolling all the way through the array
                console.log(colorIndex);
            }
            //scroll to next array option 
            colorIndex++;
            

            // Update HTML elements to display new color
            background.style.backgroundColor = colors[colorIndex];
            getColorCodeP.innerHTML = colorIndex; 
        }

            // Event listeners for COLOR button clicks
            getColorMinusButton.addEventListener("click", colorMinus);
            getColorPlusButton.addEventListener("click", colorPlus);















//What the HTML would look like if written in a .html doc
/*
    FONT AND COLOR SELECTION TOOL
        <div id="choiceToolDiv">

            <div id="fontDiv">
                <p id="fontName">Choose a font</p>
                <div id="fontButtonsDiv">
                    <button id="fontMinusButton" class="minusButton">-</button>
                    <button id="fontPlusButton" class="plusButton">+</button>
                </div>
            </div>
        
            <div id="colorDiv">
                <p id="chooseColorP">CHOOSE A COLOR</p>
                <div id="colorButtonsDiv">
                    <button id="colorMinusButton" class="minusButton">-</button>
                    <button id="colorPlusButton" class="plusButton">+</button>
                </div>
                <p id="colorCodeP">0</p>
            </div>
    </div>
*/





//what the CSS would look like if written in a .css file

/*#choiceToolDiv {
    width: 160px;
    height: 350px;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: fixed; /* makes box scroll with page 
    left: 5px;
    top: 5px;
    font-family: sans-serif;
    font-size: 15px;
    background-color: black;
    color: white;
    border-radius: 10px; 
} 

#fontDiv {
    height: 30%;
    display: grid;
    grid-template: 2fr 1fr / 1fr;
}

#colorDiv {
    height: 30%;
    display: grid;
    grid-template: 1fr 1fr 1fr / 1fr;
}

#fontButtonsDiv {
    grid-area: 2 / 1 / 2 / 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

#fontName {
    grid-area: 1 / 1 / 1 / 1;
    text-align: center;
    font-size: 20px;
    text-decoration: underline;
}

#chooseColorP {
    grid-area: 1 / 1 / 1 / 1;
    text-align: center;
    margin-top: 10px;
}

#colorButtonsDiv {
    grid-area: 2 / 1 / 2 / 1;
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

#colorCodeP {
    grid-area: 3 / 1 / 3 / 1;
    margin: 10px 0;
    text-align: center;
    font-size: 25px;
    font-weight: 500; 
    text-decoration: underline; 
}

.minusButton {
    color: black;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    margin: 10px 2px 10px 0;
    height: 30px;
    width: 30px;    
}
.plusButton {
    color: black;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    margin: 10px 2px 10px 0;
    height: 30px;
    width: 30px;
}
*/