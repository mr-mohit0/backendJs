const chatdata = async () => {
    const link = "https://chatgpt.com/g/g-p-6a298a9c68fc819197c4624f3674da0b-backend-learning/c/6a298ba9-d6cc-8321-a679-a8cf889396ca?tab=sources";
    const link2 = "https://leetcode.com/problemset/?__cf_chl_f_tk=yd3CWEwEJcjACoG0h3sgNRFaIarPArfB7METUUsNVCE-1781445159-1.0.1.1-5WJy..Mrx1Ez8bExXWffSh.mlTjWb.ehyy4vprqSmqk";
    try {
        const data = await fetch(link2);
        console.log()
        const filtereddata = await data.text()
        
        console.log(filtereddata)
    } catch (error) {
        console.log(error.message);
    }
    finally {
        console.log('result🫡');
    }
}
chatdata();