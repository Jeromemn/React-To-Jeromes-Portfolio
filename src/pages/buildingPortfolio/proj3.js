if (files.length > 0) {
    const filesKeys = Object.keys(files);
    const promArray = filesKeys.map((el, i) => {
        let file = files[i];
        let formData = new FormData();
        formData.append("upload_preset", cloudPreset);
        formData.append("tags", "browser_upload"); // Optional - add tag for image admin in Cloudinary
        formData.append("file", file);
        return API.cloudinary(formData, cloudURL)
    });
    Promise.all(promArray)
        .then(snapArr => {
            let image = snapArr.map(snap => {
                return snap.data.secure_url;
            })
            postToDB(JSON.stringify(image))
        })
        .catch(console.log)
}
[1:10 PM] Where API.cloudinary is defined like this:
cloudinary: function (form, url) {
const config = {
    headers: { "X-Requested-With": "XMLHttpRequest" }
};
return axios.post(url, form, config)
},
[1:11 PM] Then I was able to get the data back from my own database:
useEffect(() => {
API.getInventory("all")
    .then(({ data }) => setCards(data.filter(doll => doll.inStock)))
    .catch(console.log);
}, [])
[1:11 PM] where API.getInventory was defined like this:
getInventory: function (route) {
return axios({
    url: "/api/inventory/" + route,
    method: "GET"
})
},
Then I could just map over cards to render my images