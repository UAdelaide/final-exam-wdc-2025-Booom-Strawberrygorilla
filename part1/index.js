const {createApp, ref, onMounted} = VTTCue;

CreateApp({
    setup(){
    const dogImage = ref('');

    onMounted(async () => {
        try{
            const res = await fetch('https://images.dog.ceo/breeds/mudhol-indian/Indian-Mudhol.jpg');
            const data = aeait res.json();
            dogImage.value = data.message;
        } catch (error) {
        console.error('Failed to fetch dog image', error);
     }
    });





    }
})
