// let testLst = [[12, 0], [14, 14], [17, 4], [19, 18], [22, 8], //Just the beat
// [24, 20], [25, 13], [26, 20], [28, 3], [29, 10], [30, 17], [32, 0], [33, 7], [34, 14], // Instrumentals
// [35, 6], [35, 21], [36, 12], [37, 4], [37, 17], [38, 11], [39, 2], [39, 18], [40, 9], [41, 1], [41, 16], [42, 8], [42, 21], [43, 15], [44, 6], [44, 22], [45, 13], [46, 5], [46, 20], [47, 11], [48, 0], [48, 19], [49, 10], [50, 2], [50, 17], [51, 9], [52, 0], [52, 15],  // Vocals start
// ];
let testLst = []
let fpsMult = setFPS/24;
let trackSong1 = []

// let trackSong1 = testLst.map(setupTracklst);
function mapLinear(amount, baseSecond, baseFrame, gap){
    for (let i=0; i < amount; i++){
        base = baseSecond*24 + baseFrame
        totalFrames = base + gap*i
        val1 = floor(totalFrames/24)
        val2 = totalFrames%24
        testLst.push([val1, val2])
    }
}

function mapZigzag1(baseSecond, baseFrame, pattern){
    base = baseSecond*24 + baseFrame;
    totalFrames = base
    for (let i=0; i < pattern.length; i++){
        totalFrames = totalFrames + pattern[i]
        val1 = floor(totalFrames/24)
        val2 = totalFrames%24
        testLst.push([val1, val2])
    }
}


function setupTracklst(){
    // for (let i=0; i < 5; i++){
    //     base = 12*24
    //     totalFrames = base + 62*i
    //     val1 = floor(totalFrames/24)
    //     val2 = totalFrames%24
    //     testLst.push([val1, val2])
    // }
    mapLinear(6, 7, 5, 62); // Intro thumps
    mapLinear(9, 24, 20, 31); // Instrumentals kick in
    mapLinear(9, 35, 6, 15); //Vocals kick in
    mapLinear(9, 40, 10, 15); // Again
    mapLinear(9, 45, 14, 15); // Again
    mapLinear(9, 50, 18, 15); //Again
    zigZag1 = [0, 8, 5, 2, 4, 4, 8, 8, 8]
    mapZigzag1(55, 19, zigZag1) //Steve
    mapZigzag1(58, 11, zigZag1) // Dopamine
    mapZigzag1(60, 23, zigZag1) // Peaked
    mapZigzag1(63, 12, zigZag1) // Need
    // mapLinear(9, 50, 18, 15);
    mapLinear(7, 66, 5, 8); // Girl start
    mapLinear(7, 68, 19, 8); // Again
    mapLinear(7, 71, 11, 8); // Again
    testLst.push([73, 13], [73, 20]) // But I
    // [74, 0], [74, 7], [74, 14], [74, 22], [75, 6])
    mapLinear(5, 74, 0, 8); // Always gonna be
    mapLinear(3, 75, 22, 6); // Where you are (echo)
    // testLst.push([75, 22], [76, 4], [76, 11])
    mapLinear(3, 78, 11, 8); // Where you are
    mapLinear(3, 81, 1, 6); // Where you are (echo)
    testLst.push([82, 22], [83, 0]); // are are
    // testLst.push([])
    testLst.push([83, 23], [84, 5]) // But I
    mapLinear(5, 84, 11, 8); // Always gonna be
    testLst.push([86, 5], [86, 11]) // Where you are
    mapLinear(5, 86, 15, 8); // Always gonna be
    mapLinear(3, 91, 9, 6); // Where you are (echo)
    testLst.push([93, 1], [93, 7]); // are are
    mapLinear(6, 94, 6, 8); // Always gonna be
    mapLinear(4, 96, 6, 6); //I took the high road
    // testLst.push([96, 6], [96, 13], [96, 20], [97, 2], [97, 20])
    testLst.push([97, 20]); // The
    mapLinear(4, 98, 20, 6); // way the world
    testLst.push([100, 10]); // works
    testLst.push([101, 17], [102, 2], [102, 9], [103, 8], [103, 16], [104, 0], [104, 7], [104, 14], [104, 20], [105, 7], [105, 22], [106, 5]) // There's a special
    // testLst.push([107, 6], [107, 13], [107, 21], [108, 4], [108, 12], [108, 19], [109, 3], [109, 17], [110, 2]) 
    mapLinear(6, 107, 6, 8,);// We all have
    testLst.push([109, 3], [109, 17], [110, 2]); // You can't
    mapLinear(6, 110, 2, 8); // Put the
    testLst.push([112, 0], [112, 1], [112, 10]); // you came from
    mapLinear(5, 112, 17, 8) // Why can't we
    testLst.push([114, 7]) //long
    // testLst.push([112, 17], [113, 0], [113, 8], [113, 16], [114, 0], [114, 9], [114, 15]) 
    mapLinear(5, 115, 8, 8) // Or at least
    testLst.push([116, 22]) //long
    mapLinear(7, 117, 20, 8) // Honestly
    mapLinear(7, 120, 10, 8) // I would
    mapLinear(7, 123, 3, 8) // I would
    mapLinear(7, 125, 12, 8) // Just

    mapLinear(60, 128, 12, 8) // Beat

    // mapLinear(3, 127, 12, 6); // Where you are (echo)
    // mapLinear(8, 128, 12, 8) // Beat
    // mapLinear(3, 130, 2, 8); // Where you are
    // mapLinear(8, 131, 2, 8) // Beat 
    // mapLinear(3, 132, 17, 6); // Where you are (echo)
    // testLst.push([134, 15], [134, 17]); // are are
    // mapLinear(6, 134, 23, 8) // Beat
    // mapLinear(6, 135, 15, 8); // Always gonna be
    // mapLinear(3, 137, 20, 6); // Where you are (echo)
    // mapLinear(8, 139, 11, 8) // Beat
    // mapLinear(3, 143, 0, 6); // Where you are (echo)
    // testLst.push([144, 15], [144, 23]); // are are
    // mapLinear(6, 146, 6, 8); // Always gonna be

    zigZag2 = [8, 16, 8, 16, 8]
    mapLinear(8, 148, 19, 8); // Guitar riff
    mapZigzag1(151, 9, zigZag2);
    mapLinear(8, 153, 23, 8);
    mapZigzag1(156, 13, zigZag2);
    mapLinear(8, 159, 3, 8);
    mapZigzag1(161, 17, zigZag2.slice(0, -1));
    testLst.push([163, 0], [163, 8], [163, 16], [164, 8]);
    mapLinear(8, 164, 23, 8);
    mapZigzag1(166, 21, zigZag2); // I still
    mapLinear(3, 168, 12, 8);
    mapZigzag1(172, 1, zigZag2); // I still
    mapLinear(3, 173, 16, 8);
    mapZigzag1(177, 5, zigZag2); // I still
    mapLinear(3, 178, 20, 8);
    mapZigzag1(182, 9, zigZag2); // I still
    mapLinear(3, 184, 0, 8);
    mapZigzag1(187, 14, zigZag2); // I still
    zigZag3 = [4, 2, 2, 2];
    mapZigzag1(190, 3,zigZag3);
    mapZigzag1(192, 10, zigZag3);
    mapZigzag1(193, 16, zigZag3);
    mapZigzag1(194, 22, zigZag3);
    mapZigzag1(196, 6, zigZag3);
    mapZigzag1(197, 14, zigZag3);
    mapZigzag1(198, 20, zigZag3);
    zigZag4 = [8, 8, 16];
    mapZigzag1(200, 1, zigZag4)
    mapZigzag1(201, 10, zigZag3);
    mapZigzag1(202, 16, zigZag3);
    mapZigzag1(204, 0, zigZag3);
    mapZigzag1(205, 6, zigZag3);
    mapZigzag1(206, 14, zigZag3);
    mapZigzag1(207, 21, zigZag3);
    mapZigzag1(209, 4, zigZag3);
    mapZigzag1(210, 11, zigZag3);
    // testLst.push([166, 21], ) // I still
    // mapLinear(8, 128, 12, 8) // Beat



    for (let i=0; i < testLst.length; i++){
        let seconds = testLst[i][0];
        let frame = testLst[i][1];
        trackSong1.push((seconds*24 + frame) * fpsMult);
    }
    // let seconds = pair[0];
    // let frame = pair[1]
    // return (seconds*24 + frame) * fpsMult
    // for (let i=0; i < 11; i++){
    //     testLst.push((226*(setFPS/24))+(i*(8*(setFPS/24))));
    // }
}