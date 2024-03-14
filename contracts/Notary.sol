pragma solidity ^0.5.0;

contract Notary {

    struct MyNotaryEntry {
        string fileName;
        uint timestamp;
        bytes32 checkSum;
        string comments;
        bool isNotarized;
        address originator;
    }

    mapping (bytes32 => MyNotaryEntry) public mappedEntry;

    event NewEntry(bytes32 _checksum, string _filename, address indexed _originator);

    function addEntry(bytes32 _checksum, string memory _fileName, string memory _comments) public {
        require(!mappedEntry[_checksum].isNotarized);

        mappedEntry[_checksum].isNotarized = true;
        mappedEntry[_checksum].fileName = _fileName;
        mappedEntry[_checksum].timestamp = block.timestamp;
        mappedEntry[_checksum].comments = _comments;
        mappedEntry[_checksum].originator = msg.sender;

        emit NewEntry(_checksum, _fileName, msg.sender);
    }

    function entrySet(bytes32 _checksum) public view returns(string memory, uint, string memory, address) {
        require(mappedEntry[_checksum].isNotarized);
        return (mappedEntry[_checksum].fileName, mappedEntry[_checksum].timestamp, mappedEntry[_checksum].comments, mappedEntry[_checksum].originator);
    }

}
