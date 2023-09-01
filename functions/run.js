async function handleEvent(event) {
  // parse prompt
  let body = await event.request.json();
  let hair_color = body["hair-color"] + " hair";
  let eye_color = body["eye-color"] + " eyes";
  let area = body["area"];
  let prompt = hair_color + "," + eye_color + "," + area + ",portrait photo of a pretty young lady, indoor, natural lighting, film grain";
  let n_prompt = "EasyNegative, (simple background), nude, (more than two legs), (deformed toes), (deformed feet), (more than five toes), ((big toes)), (ugly feet), (bad feet), (bad toes), ((socks)), water paint, paintings, sketches, (worst quality:2), (low quality:2), (normal quality:2), lowres, normal quality, ((monochrome)), ((grayscale)), skin spots, acnes, skin blemishes, age spot, glans, nsfw, (outdoor:1.6), backlight,(ugly:1.331), (duplicate:1.331), (morbid:1.21), (mutilated:1.21), (tranny:1.331), mutated hands, (poorly drawn hands:1.5), blurry, (bad anatomy:1.21), (bad proportions:1.331), extra limbs, (disfigured:1.331), (more than 2 nipples:1.331), (missing arms:1.331), (extra legs:1.331), (fused fingers:1.61051), (too many fingers:1.61051), (unclear eyes:1.331), lowers, bad hands, missing fingers, extra digit, (futa:1.1),bad hands, missing fingers, panties,ugly, anime, cartoon, hairy, painting, sketch, drawing, easynegative, foot, straps, glare, blurry, lowres, shadow, extra legs, hand, bad eye, child, (looking away)";
  // call AI
  let result = await AI.txt2img(prompt, n_prompt);
  let response = new Response(
                JSON.stringify(result))
  response.headers.append('Access-Control-Allow-Origin', '*');
  event.respondWith(response);
}

addEventListener('fetch', (event) => {
        handleEvent(event);
});
