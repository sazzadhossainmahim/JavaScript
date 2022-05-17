function areYouPlayingBanjo(name) {
    // Implement me
    if (name.toLowerCase().charAt(0) == 'r') {
        name = name + " plays banjo";
    } else {
        name = name + " does not play banjo";
    }
    return name;
}

// function areYouPlayingBanjo(name) {
//     return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
// }

// function areYouPlayingBanjo(name) {
//     // Implement me
//     if (name[0] == 'R' || name[0] == 'r')
//         return name + " plays banjo";
//     else
//         return name + " does not play banjo";
// }

// function areYouPlayingBanjo(name) {
//     return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";
// }


// function areYouPlayingBanjo(name) {
//     return name[0].toLowerCase() == "r" ? name + " plays banjo" : name + " does not play banjo";
// }



// const areYouPlayingBanjo = name => {
//     const plays = name.toLowerCase().startsWith('r') ?
//         'plays' :
//         'does not play';
//     return `${name} ${plays} banjo`;
// }