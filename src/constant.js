export const doc_img_url = "https://static.vecteezy.com/system/resources/previews/033/522/524/large_2x/cartoon-plasticine-3d-avatar-online-doctor-guy-isolated-on-white-background-photo.jpg"
export const patient_img_url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH3lP6SUeKRDvfW7vn_A7-XiO3yxyuTnTLSQ&s";

export const logouthandler = () =>
    {
      localStorage.clear( );
      location.reload();
      
    }

    export const TIMINGS = [
      "12:00AM-1:00PM",
      "2:00PM-3:00PM",
      "4:00AM-5:00PM",
      "6:00AM-7:00PM",
    ];
    
    export function filterTimings(dumTimings) {
      return TIMINGS.filter((timing) => !dumTimings.includes(timing));
    }
    