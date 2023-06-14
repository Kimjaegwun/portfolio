import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "메인 - 자기소개",
  description: "jaegwun's profile",
  openGraph: {
    title: "메인 - 자기소개",
    description: "jaegwun's profile",
    url: "https://www.kingjaegwun.dev/main",
    images: [
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEVdrez////M1t2aqrSuu8HJ09rDz9ahsLrP2d/w8/VYq+x7uOjm6+62wsnC0t+Hu+e70N+ntr/e5OnW3uP3+Pnt8PO5xcxts+qexePU3ePH1N6vy+GTwOV/uedjr+u4z+CixuJ8Vp4FAAAFL0lEQVR4nO2d63aqMBBGo1aFGmy5Kp7e3v8pD1qBBEJLElzD0G//bleymcnkAsuI1dIR1B14ODDkDwz5A0P+wJA/MOQPDPkDQ/7AkD8w5A8M+QND/sCQPzDkDwz5A0P+wJA/MOTP3zbMwlxyIA8zJ8NQpmUQrOdPEJSpDK0NM5lS99yKVA7FccAwSzhETyVIBhTNhllC3WEHBhSNhiwFhxSNhjm3FP0myMcaZryKTEtqCqLJMKfuqTOmIJoMeY7CK8k4Q7ZJak5Tk2Gvzsy18PQ7Os4w7P7j5fg6T46XrqFh8fa74eXf2/thnry//bv4G17OJ/E8V8TpfPE2PH88i/ny/HH2NXw9zVmwUjy9ehqe5y1YKZ49DV9mb/jiaXiYveEBhjCEITUwhCEM6YEhDGFIDwxhCEN6YAhDGNIDQxjCkB4YwhCG9MAQhjCkB4YwhCE9MIQhDOmBIQxhSA8MYQhDemAIQxjSA0MYwpAeGMIQhvTAEIYwpAeGMIQhPTCEIQzpgSEMYUgPDGEIQ3pgCEMY0gNDGMKQHhjCEIb0wHABhu+ehsv//dIvaoNf+fI0PM7+d4SPnobrrxO1xI+c1BA6/mL51+GDWmOQj4Mm6Gi4/jy/vcyTt/PnegrDYH05zpNL9+6AkYZZue4SzJNeP8uRtz8s/n6L5d9RwvWqoIHLgox3BXENovHCp79539NqJak764Q0uvzRe9euUeSWqIE5gsOGqzzl5BikxjH4o+Eqk0l/cTNPymTwfschwzCXSUVKvSwbSXrtrMzHj8NMcgmejvmmToNhznddmozaW7CroiplX7FnyHQ9U9PfXXQNu5vDLQO0Dve2F11DbTGz3RXR/CmKndrp7sTYMQw1weKJCYUSx/JnQzWE24i64+NRFeVPhloI2UTwiqLYOazRDdUQ7qg7bYcyFuWwoXoDKaccvRINBVEzzKcModMT8nisShDzQUM1Sb1GYVTsXCe3nWvDykhMhgzDqZI00iYoWxyzR2lUO/pWDaeqM36CzumjtJqYDdWzbq/Jvtj2e22D49NVmlVXp4qhnCpJCz9B18bVNJUmw2yyybBpqaobFrQhmCBNM4NhruwqvJK0eZa7KLaimdL807TMDYZaCL2S9N7QLt7Ysa8Vt24NR8Za0xhq79S8kvQ+DIPCUnCziesuOj5gxTANe4ZanfGa7ut2nqwN93WNcmxfSdO21tSG2WRJ2uSKbZJW1Ib+k35ba2pD7XjGL0nrwbS3N4zqJHJtu3VoXkTVhtrW1ytJ62G4sxfcxHWaOSaRutZIdMNQPYDy2zjdM8Wh0CilxvEZR+ppRqgZai8M/WbDuhH7QlOVmmYqdWtcWy9K1bDzvtCn0jSD3aHQtMXUbSDqS/57rRH9OuOjGDVP0aXQtKXGqQedPc291ghDCK8NFC4tRO3JpVOh2WyemjS7ndVatV50N23fQRS9OtO0YI86ClwKjVJM17br9l1/y/Zda0SvzkyES6FRiukkyNrwIZ95uRSaqQ1vG+GrYf7731qzdTPcT2p4O3QTqwd9xzaHGN7WNaL/Pek0uFWayPOIp8P10E087AOoIt7bEk8seKs1wvTB7DT4vuucgjKrDB9RZ+ZDXhly/IRtPOlKhL//FWtCsewQVhOGcFl/cmIr7Gs6L2IROc3MfIjFlroLD6YQkroLDyYVmdtGjgtxKFYBdSceSlCtacIl15oovO0t3LZyHIjlfQe8VMU4aU6ilpmokWxPhMNgeWGM71/V1O+ewrRYkmRcNC+B/wO+BHTd8EnXGQAAAABJRU5ErkJggg==",
    ],
  },
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-[700px] px-[10px] h-screen p-3 text-white">
      {children}
    </div>
  );
};

export default MainLayout;
