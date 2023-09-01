async function handleEvent(event) {
  // parse prompt
  let body = await event.request.json();
  let hair_color = body["hair-color"] + " hair";
  let eye_color = body["eye-color"] + " eyes";
  let area = body["area"];
  let hair_style = body["hair-style"] + " hair"
  let base_prompt = "double eyelids, a pretty young lady, rich skin texture, ID photo, front view, chest up, medium shot, clear background, rich details, real, high resolution, extremely high quality, detailed background, excellent details and textures, detailed skin, detailed eyes, 8k UHD";
  let prompt = hair_style + "," + hair_color + "," + base_prompt + "," + eye_color + "," + area ;
  let n_prompt = "worst quality, low quality, watermark, 3d, midriff, nipples, canvas frame, cartoon, 3d, disfigured, bad art, deformed, extra limbs, weird colors, blurry, duplicate, morbid, mutilated, out of frame, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, ugly, blurry, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, Photoshop, video game, tiling, cross-eye, body out of frame, 3d render";
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
