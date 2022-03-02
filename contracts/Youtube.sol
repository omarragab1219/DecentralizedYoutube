//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Youtube {
    address private owner;

    mapping(address=>User) public Users;

    struct User{
        bool creator;
        uint worth;
        uint totalLikes;
        uint creatorSince; //block time
        mapping(uint=>Video) Videos;
        uint videoCount;
        //video retreived through graph protocol;
    }


    // mapping (uint=>Video) public Videos;

    struct Video{
        string title;
        string description;  
        string[] content;
        string thumbnail;
        address creator;
        uint likes;
        mapping(address=>bool) likedBy;
        uint dateCreated; //block time
        uint videoID; // video number
    }

    event VideoCreated(string title,
        string description,
        string[] content,
        string thumbnail,
        address creator,
        uint likes,
          uint dateCreated, //block time
        uint videoID // video number
        );

    event TitleUpdated( address creator,string title,uint videoID);
    event DescriptionUpdated( address creator,string description,uint videoID);
    event ThumbnailUpdated(  address creator,string thumbnail,uint videoID);

    

    constructor() {
        owner=msg.sender ;
    }



    function createVideo(
        // string memory title,
        // string memory _description,
        // string[] memory _content,
        // string memory _thumbnail,
        // address  _creator
) public  returns (string memory) {
    User storage currentUser=Users[msg.sender];
    if (currentUser.creator==false){
        currentUser.creator=true;
        currentUser.creatorSince=block.timestamp;
    }
    Video storage currentVideo=currentUser.Videos[currentUser.videoCount];
    currentVideo.title="title here";
    currentVideo.description="description here";
    currentVideo.content=["content here"];
    currentVideo.thumbnail="thumbnail here";
    currentVideo.creator=msg.sender;


    //maybe just emit current video??

    return currentVideo.title ;
    
 }


  function seeVideo(uint _videoId) public view returns(string memory){
      User storage currentUser=Users[msg.sender];
       Video storage currentVideo=currentUser.Videos[_videoId];
      return currentVideo.title;
  }


    function sendTip(address payable _to) public payable{
        uint value=msg.value;
        _to.transfer(value);
        Users[_to].worth+=value;
    }

    function editVideo( 
        // uint _videoId, string memory _title, string memory _description, string memory _thumbnail
        ) public returns (bool) {
        string memory emptyString="";
        string memory test="o";
        User storage currentUser=Users[msg.sender];
        Video storage currentVideo=currentUser.Videos[0]; //_videoId
        // if((keccak256(abi.encodePacked(("hi"))) == keccak256(abi.encodePacked((emptyString))))){
        //     return false
        //     currentVideo.title="new title here";
        //     };

        if(bytes(test).length==bytes(emptyString).length){currentVideo.title="editing title";}

        // if(_description.length==emptyString.length){currentVideo.description="new description here";}
        // if(_thumbnail==emptyString){  currentVideo.thumbnail="new thumbnail here";}
        return true;
    }


    function likeVideo(uint _videoId, address _creator) public returns(string memory) {
        User storage currentUser=Users[_creator];
        Video storage currentVideo=currentUser.Videos[_videoId];
        if(currentVideo.likedBy[msg.sender]==true){return "User has already liked the video";}

        currentVideo.likes++;
        currentVideo.likedBy[msg.sender]==true;
        return "Video liked";

    }

    function deleteVideo() public {}


  
}
