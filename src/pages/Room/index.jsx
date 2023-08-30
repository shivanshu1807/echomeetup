import React from "react";
import {useParams} from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import "./room.css"
const RoomPage = () => {
    const { roomId } = useParams();
    const myMeeting = async (element) => {
        const appID = 787593669;
        const serverSecret = "211d616c93ef2f4e8533fd66df29a38b";
        const KitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            "Shivanshu Singh"
        );
        const zc = ZegoUIKitPrebuilt.create(KitToken);
        zc.joinRoom({
            container : element,
            sharedLinks : [ {
                name : "Copy link",
                url : `http://localhost:3000/room/${roomId}`,
            },
            ],
            
            scenario : {
                mode : ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton : true,
        })
    };
  return (
    <div>
        <body>
            
        <div ref={myMeeting}/>
        </body>

    </div>
  )
}
 export default RoomPage;