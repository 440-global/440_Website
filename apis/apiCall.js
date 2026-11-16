

export async function uploadImage(formData) {
    try {
        const response = await fetch(`https://ccdn.creditclan.com/index.php/mobi/api/uploadImage`, {
      method: "POST",
      body: formData,
    })
    const responseData = await response.json()
    return responseData
    } catch (error) {
        console.log(error);
    }
  }

  export async function uploadRfq(data) {
    try {
      console.log(data);

        const response = await fetch(`https://lendnode.creditclan.com/gateway/store/stores/partener/save_quotation`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const responseData = await response.json()
    return responseData
    } catch (error) {
        console.log(error);
    }
  }

  export function NijaStates() {
    return [
       { "id": "abia", "name": "Abia" },
       { "id": "adamawa", "name": "Adamawa" },
       { "id": "akwa-ibom", "name": "Akwa Ibom" },
       { "id": "anambra", "name": "Anambra" },
       { "id": "bauchi", "name": "Bauchi" },
       { "id": "bayelsa", "name": "Bayelsa" },
       { "id": "benue", "name": "Benue" },
       { "id": "borno", "name": "Borno" },
       { "id": "cross-river", "name": "Cross River" },
       { "id": "delta", "name": "Delta" },
       { "id": "ebonyi", "name": "Ebonyi" },
       { "id": "edo", "name": "Edo" },
       { "id": "ekiti", "name": "Ekiti" },
       { "id": "enugu", "name": "Enugu" },
       { "id": "gombe", "name": "Gombe" },
       { "id": "imo", "name": "Imo" },
       { "id": "jigawa", "name": "Jigawa" },
       { "id": "kaduna", "name": "Kaduna" },
       { "id": "kano", "name": "Kano" },
       { "id": "katsina", "name": "Katsina" },
       { "id": "kebbi", "name": "Kebbi" },
       { "id": "kogi", "name": "Kogi" },
       { "id": "kwara", "name": "Kwara" },
       { "id": "lagos", "name": "Lagos" },
       { "id": "nasarawa", "name": "Nasarawa" },
       { "id": "niger", "name": "Niger" },
       { "id": "ogun", "name": "Ogun" },
       { "id": "ondo", "name": "Ondo" },
       { "id": "osun", "name": "Osun" },
       { "id": "oyo", "name": "Oyo" },
       { "id": "plateau", "name": "Plateau" },
       { "id": "rivers", "name": "Rivers" },
       { "id": "sokoto", "name": "Sokoto" },
       { "id": "taraba", "name": "Taraba" },
       { "id": "yobe", "name": "Yobe" },
       { "id": "zamfara", "name": "Zamfara" },
       { "id": "fct", "name": "Federal Capital Territory" }
     ]
       .map(state => ({ text: state.name, value: state.id }))
       .sort((a, b) => a.text.match(/lagos/gi) ? -1 : b.text.match(/lagos/gi) ? 1 : 0);
   }