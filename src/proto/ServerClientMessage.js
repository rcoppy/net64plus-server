/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ServerClientMessage = (function() {

    /**
     * Properties of a ServerClientMessage.
     * @exports IServerClientMessage
     * @interface IServerClientMessage
     * @property {Compression|null} [compression] ServerClientMessage compression
     * @property {number|null} [uncompressedSize] ServerClientMessage uncompressedSize
     * @property {Uint8Array|null} [compressedData] ServerClientMessage compressedData
     * @property {IServerClient|null} [data] ServerClientMessage data
     */

    /**
     * Constructs a new ServerClientMessage.
     * @exports ServerClientMessage
     * @classdesc Represents a ServerClientMessage.
     * @implements IServerClientMessage
     * @constructor
     * @param {IServerClientMessage=} [properties] Properties to set
     */
    function ServerClientMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerClientMessage compression.
     * @member {Compression} compression
     * @memberof ServerClientMessage
     * @instance
     */
    ServerClientMessage.prototype.compression = 0;

    /**
     * ServerClientMessage uncompressedSize.
     * @member {number} uncompressedSize
     * @memberof ServerClientMessage
     * @instance
     */
    ServerClientMessage.prototype.uncompressedSize = 0;

    /**
     * ServerClientMessage compressedData.
     * @member {Uint8Array} compressedData
     * @memberof ServerClientMessage
     * @instance
     */
    ServerClientMessage.prototype.compressedData = $util.newBuffer([]);

    /**
     * ServerClientMessage data.
     * @member {IServerClient|null|undefined} data
     * @memberof ServerClientMessage
     * @instance
     */
    ServerClientMessage.prototype.data = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * ServerClientMessage message.
     * @member {"compressedData"|"data"|undefined} message
     * @memberof ServerClientMessage
     * @instance
     */
    Object.defineProperty(ServerClientMessage.prototype, "message", {
        get: $util.oneOfGetter($oneOfFields = ["compressedData", "data"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new ServerClientMessage instance using the specified properties.
     * @function create
     * @memberof ServerClientMessage
     * @static
     * @param {IServerClientMessage=} [properties] Properties to set
     * @returns {ServerClientMessage} ServerClientMessage instance
     */
    ServerClientMessage.create = function create(properties) {
        return new ServerClientMessage(properties);
    };

    /**
     * Encodes the specified ServerClientMessage message. Does not implicitly {@link ServerClientMessage.verify|verify} messages.
     * @function encode
     * @memberof ServerClientMessage
     * @static
     * @param {IServerClientMessage} message ServerClientMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerClientMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.compression != null && message.hasOwnProperty("compression"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.compression);
        if (message.uncompressedSize != null && message.hasOwnProperty("uncompressedSize"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.uncompressedSize);
        if (message.compressedData != null && message.hasOwnProperty("compressedData"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.compressedData);
        if (message.data != null && message.hasOwnProperty("data"))
            $root.ServerClient.encode(message.data, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ServerClientMessage message, length delimited. Does not implicitly {@link ServerClientMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerClientMessage
     * @static
     * @param {IServerClientMessage} message ServerClientMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerClientMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerClientMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ServerClientMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerClientMessage} ServerClientMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerClientMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerClientMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.compression = reader.int32();
                break;
            case 2:
                message.uncompressedSize = reader.uint32();
                break;
            case 3:
                message.compressedData = reader.bytes();
                break;
            case 4:
                message.data = $root.ServerClient.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServerClientMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerClientMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerClientMessage} ServerClientMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerClientMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerClientMessage message.
     * @function verify
     * @memberof ServerClientMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerClientMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.compression != null && message.hasOwnProperty("compression"))
            switch (message.compression) {
            default:
                return "compression: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.uncompressedSize != null && message.hasOwnProperty("uncompressedSize"))
            if (!$util.isInteger(message.uncompressedSize))
                return "uncompressedSize: integer expected";
        if (message.compressedData != null && message.hasOwnProperty("compressedData")) {
            properties.message = 1;
            if (!(message.compressedData && typeof message.compressedData.length === "number" || $util.isString(message.compressedData)))
                return "compressedData: buffer expected";
        }
        if (message.data != null && message.hasOwnProperty("data")) {
            if (properties.message === 1)
                return "message: multiple values";
            properties.message = 1;
            {
                var error = $root.ServerClient.verify(message.data);
                if (error)
                    return "data." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ServerClientMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerClientMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerClientMessage} ServerClientMessage
     */
    ServerClientMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerClientMessage)
            return object;
        var message = new $root.ServerClientMessage();
        switch (object.compression) {
        case "NONE":
        case 0:
            message.compression = 0;
            break;
        case "ZSTD":
        case 1:
            message.compression = 1;
            break;
        case "GZIP":
        case 2:
            message.compression = 2;
            break;
        }
        if (object.uncompressedSize != null)
            message.uncompressedSize = object.uncompressedSize >>> 0;
        if (object.compressedData != null)
            if (typeof object.compressedData === "string")
                $util.base64.decode(object.compressedData, message.compressedData = $util.newBuffer($util.base64.length(object.compressedData)), 0);
            else if (object.compressedData.length)
                message.compressedData = object.compressedData;
        if (object.data != null) {
            if (typeof object.data !== "object")
                throw TypeError(".ServerClientMessage.data: object expected");
            message.data = $root.ServerClient.fromObject(object.data);
        }
        return message;
    };

    /**
     * Creates a plain object from a ServerClientMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerClientMessage
     * @static
     * @param {ServerClientMessage} message ServerClientMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerClientMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.compression = options.enums === String ? "NONE" : 0;
            object.uncompressedSize = 0;
        }
        if (message.compression != null && message.hasOwnProperty("compression"))
            object.compression = options.enums === String ? $root.Compression[message.compression] : message.compression;
        if (message.uncompressedSize != null && message.hasOwnProperty("uncompressedSize"))
            object.uncompressedSize = message.uncompressedSize;
        if (message.compressedData != null && message.hasOwnProperty("compressedData")) {
            object.compressedData = options.bytes === String ? $util.base64.encode(message.compressedData, 0, message.compressedData.length) : options.bytes === Array ? Array.prototype.slice.call(message.compressedData) : message.compressedData;
            if (options.oneofs)
                object.message = "compressedData";
        }
        if (message.data != null && message.hasOwnProperty("data")) {
            object.data = $root.ServerClient.toObject(message.data, options);
            if (options.oneofs)
                object.message = "data";
        }
        return object;
    };

    /**
     * Converts this ServerClientMessage to JSON.
     * @function toJSON
     * @memberof ServerClientMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerClientMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerClientMessage;
})();

$root.ServerClient = (function() {

    /**
     * Properties of a ServerClient.
     * @exports IServerClient
     * @interface IServerClient
     * @property {ServerClient.MessageType|null} [messageType] ServerClient messageType
     * @property {IServerHandshake|null} [handshake] ServerClient handshake
     * @property {IPing|null} [ping] ServerClient ping
     * @property {IServerMessage|null} [serverMessage] ServerClient serverMessage
     * @property {IPlayerListUpdate|null} [playerListUpdate] ServerClient playerListUpdate
     * @property {IPlayerUpdate|null} [playerUpdate] ServerClient playerUpdate
     * @property {IPlayerData|null} [playerData] ServerClient playerData
     * @property {IMetaData|null} [metaData] ServerClient metaData
     * @property {IChat|null} [chat] ServerClient chat
     */

    /**
     * Constructs a new ServerClient.
     * @exports ServerClient
     * @classdesc Represents a ServerClient.
     * @implements IServerClient
     * @constructor
     * @param {IServerClient=} [properties] Properties to set
     */
    function ServerClient(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerClient messageType.
     * @member {ServerClient.MessageType} messageType
     * @memberof ServerClient
     * @instance
     */
    ServerClient.prototype.messageType = 0;

    /**
     * ServerClient handshake.
     * @member {IServerHandshake|null|undefined} handshake
     * @memberof ServerClient
     * @instance
     */
    ServerClient.prototype.handshake = null;

    /**
     * ServerClient ping.
     * @member {IPing|null|undefined} ping
     * @memberof ServerClient
     * @instance
     */
    ServerClient.prototype.ping = null;

    /**
     * ServerClient serverMessage.
     * @member {IServerMessage|null|undefined} serverMessage
     * @memberof ServerClient
     * @instance
     */
    ServerClient.prototype.serverMessage = null;

    /**
     * ServerClient playerListUpdate.
     * @member {IPlayerListUpdate|null|undefined} playerListUpdate
     * @memberof ServerClient
     * @instance
     */
    ServerClient.prototype.playerListUpdate = null;

    /**
     * ServerClient playerUpdate.
     * @member {IPlayerUpdate|null|undefined} playerUpdate
     * @memberof ServerClient
     * @instance
     */
    ServerClient.prototype.playerUpdate = null;

    /**
     * ServerClient playerData.
     * @member {IPlayerData|null|undefined} playerData
     * @memberof ServerClient
     * @instance
     */
    ServerClient.prototype.playerData = null;

    /**
     * ServerClient metaData.
     * @member {IMetaData|null|undefined} metaData
     * @memberof ServerClient
     * @instance
     */
    ServerClient.prototype.metaData = null;

    /**
     * ServerClient chat.
     * @member {IChat|null|undefined} chat
     * @memberof ServerClient
     * @instance
     */
    ServerClient.prototype.chat = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * ServerClient message.
     * @member {"handshake"|"ping"|"serverMessage"|"playerListUpdate"|"playerUpdate"|"playerData"|"metaData"|"chat"|undefined} message
     * @memberof ServerClient
     * @instance
     */
    Object.defineProperty(ServerClient.prototype, "message", {
        get: $util.oneOfGetter($oneOfFields = ["handshake", "ping", "serverMessage", "playerListUpdate", "playerUpdate", "playerData", "metaData", "chat"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new ServerClient instance using the specified properties.
     * @function create
     * @memberof ServerClient
     * @static
     * @param {IServerClient=} [properties] Properties to set
     * @returns {ServerClient} ServerClient instance
     */
    ServerClient.create = function create(properties) {
        return new ServerClient(properties);
    };

    /**
     * Encodes the specified ServerClient message. Does not implicitly {@link ServerClient.verify|verify} messages.
     * @function encode
     * @memberof ServerClient
     * @static
     * @param {IServerClient} message ServerClient message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerClient.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.messageType != null && message.hasOwnProperty("messageType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.messageType);
        if (message.handshake != null && message.hasOwnProperty("handshake"))
            $root.ServerHandshake.encode(message.handshake, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.ping != null && message.hasOwnProperty("ping"))
            $root.Ping.encode(message.ping, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.serverMessage != null && message.hasOwnProperty("serverMessage"))
            $root.ServerMessage.encode(message.serverMessage, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.playerListUpdate != null && message.hasOwnProperty("playerListUpdate"))
            $root.PlayerListUpdate.encode(message.playerListUpdate, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.playerUpdate != null && message.hasOwnProperty("playerUpdate"))
            $root.PlayerUpdate.encode(message.playerUpdate, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.playerData != null && message.hasOwnProperty("playerData"))
            $root.PlayerData.encode(message.playerData, writer.uint32(/* id 128, wireType 2 =*/1026).fork()).ldelim();
        if (message.metaData != null && message.hasOwnProperty("metaData"))
            $root.MetaData.encode(message.metaData, writer.uint32(/* id 129, wireType 2 =*/1034).fork()).ldelim();
        if (message.chat != null && message.hasOwnProperty("chat"))
            $root.Chat.encode(message.chat, writer.uint32(/* id 130, wireType 2 =*/1042).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ServerClient message, length delimited. Does not implicitly {@link ServerClient.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerClient
     * @static
     * @param {IServerClient} message ServerClient message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerClient.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerClient message from the specified reader or buffer.
     * @function decode
     * @memberof ServerClient
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerClient} ServerClient
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerClient.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerClient();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.messageType = reader.int32();
                break;
            case 2:
                message.handshake = $root.ServerHandshake.decode(reader, reader.uint32());
                break;
            case 3:
                message.ping = $root.Ping.decode(reader, reader.uint32());
                break;
            case 4:
                message.serverMessage = $root.ServerMessage.decode(reader, reader.uint32());
                break;
            case 5:
                message.playerListUpdate = $root.PlayerListUpdate.decode(reader, reader.uint32());
                break;
            case 6:
                message.playerUpdate = $root.PlayerUpdate.decode(reader, reader.uint32());
                break;
            case 128:
                message.playerData = $root.PlayerData.decode(reader, reader.uint32());
                break;
            case 129:
                message.metaData = $root.MetaData.decode(reader, reader.uint32());
                break;
            case 130:
                message.chat = $root.Chat.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServerClient message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerClient
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerClient} ServerClient
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerClient.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerClient message.
     * @function verify
     * @memberof ServerClient
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerClient.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.messageType != null && message.hasOwnProperty("messageType"))
            switch (message.messageType) {
            default:
                return "messageType: enum value expected";
            case 0:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 128:
            case 129:
            case 130:
                break;
            }
        if (message.handshake != null && message.hasOwnProperty("handshake")) {
            properties.message = 1;
            {
                var error = $root.ServerHandshake.verify(message.handshake);
                if (error)
                    return "handshake." + error;
            }
        }
        if (message.ping != null && message.hasOwnProperty("ping")) {
            if (properties.message === 1)
                return "message: multiple values";
            properties.message = 1;
            {
                var error = $root.Ping.verify(message.ping);
                if (error)
                    return "ping." + error;
            }
        }
        if (message.serverMessage != null && message.hasOwnProperty("serverMessage")) {
            if (properties.message === 1)
                return "message: multiple values";
            properties.message = 1;
            {
                var error = $root.ServerMessage.verify(message.serverMessage);
                if (error)
                    return "serverMessage." + error;
            }
        }
        if (message.playerListUpdate != null && message.hasOwnProperty("playerListUpdate")) {
            if (properties.message === 1)
                return "message: multiple values";
            properties.message = 1;
            {
                var error = $root.PlayerListUpdate.verify(message.playerListUpdate);
                if (error)
                    return "playerListUpdate." + error;
            }
        }
        if (message.playerUpdate != null && message.hasOwnProperty("playerUpdate")) {
            if (properties.message === 1)
                return "message: multiple values";
            properties.message = 1;
            {
                var error = $root.PlayerUpdate.verify(message.playerUpdate);
                if (error)
                    return "playerUpdate." + error;
            }
        }
        if (message.playerData != null && message.hasOwnProperty("playerData")) {
            if (properties.message === 1)
                return "message: multiple values";
            properties.message = 1;
            {
                var error = $root.PlayerData.verify(message.playerData);
                if (error)
                    return "playerData." + error;
            }
        }
        if (message.metaData != null && message.hasOwnProperty("metaData")) {
            if (properties.message === 1)
                return "message: multiple values";
            properties.message = 1;
            {
                var error = $root.MetaData.verify(message.metaData);
                if (error)
                    return "metaData." + error;
            }
        }
        if (message.chat != null && message.hasOwnProperty("chat")) {
            if (properties.message === 1)
                return "message: multiple values";
            properties.message = 1;
            {
                var error = $root.Chat.verify(message.chat);
                if (error)
                    return "chat." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ServerClient message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerClient
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerClient} ServerClient
     */
    ServerClient.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerClient)
            return object;
        var message = new $root.ServerClient();
        switch (object.messageType) {
        case "UNKNOWN":
        case 0:
            message.messageType = 0;
            break;
        case "HANDSHAKE":
        case 2:
            message.messageType = 2;
            break;
        case "PING":
        case 3:
            message.messageType = 3;
            break;
        case "SERVER_MESSAGE":
        case 4:
            message.messageType = 4;
            break;
        case "PLAYER_LIST_UPDATE":
        case 5:
            message.messageType = 5;
            break;
        case "PLAYER_UPDATE":
        case 6:
            message.messageType = 6;
            break;
        case "PLAYER_DATA":
        case 128:
            message.messageType = 128;
            break;
        case "META_DATA":
        case 129:
            message.messageType = 129;
            break;
        case "CHAT":
        case 130:
            message.messageType = 130;
            break;
        }
        if (object.handshake != null) {
            if (typeof object.handshake !== "object")
                throw TypeError(".ServerClient.handshake: object expected");
            message.handshake = $root.ServerHandshake.fromObject(object.handshake);
        }
        if (object.ping != null) {
            if (typeof object.ping !== "object")
                throw TypeError(".ServerClient.ping: object expected");
            message.ping = $root.Ping.fromObject(object.ping);
        }
        if (object.serverMessage != null) {
            if (typeof object.serverMessage !== "object")
                throw TypeError(".ServerClient.serverMessage: object expected");
            message.serverMessage = $root.ServerMessage.fromObject(object.serverMessage);
        }
        if (object.playerListUpdate != null) {
            if (typeof object.playerListUpdate !== "object")
                throw TypeError(".ServerClient.playerListUpdate: object expected");
            message.playerListUpdate = $root.PlayerListUpdate.fromObject(object.playerListUpdate);
        }
        if (object.playerUpdate != null) {
            if (typeof object.playerUpdate !== "object")
                throw TypeError(".ServerClient.playerUpdate: object expected");
            message.playerUpdate = $root.PlayerUpdate.fromObject(object.playerUpdate);
        }
        if (object.playerData != null) {
            if (typeof object.playerData !== "object")
                throw TypeError(".ServerClient.playerData: object expected");
            message.playerData = $root.PlayerData.fromObject(object.playerData);
        }
        if (object.metaData != null) {
            if (typeof object.metaData !== "object")
                throw TypeError(".ServerClient.metaData: object expected");
            message.metaData = $root.MetaData.fromObject(object.metaData);
        }
        if (object.chat != null) {
            if (typeof object.chat !== "object")
                throw TypeError(".ServerClient.chat: object expected");
            message.chat = $root.Chat.fromObject(object.chat);
        }
        return message;
    };

    /**
     * Creates a plain object from a ServerClient message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerClient
     * @static
     * @param {ServerClient} message ServerClient
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerClient.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.messageType = options.enums === String ? "UNKNOWN" : 0;
        if (message.messageType != null && message.hasOwnProperty("messageType"))
            object.messageType = options.enums === String ? $root.ServerClient.MessageType[message.messageType] : message.messageType;
        if (message.handshake != null && message.hasOwnProperty("handshake")) {
            object.handshake = $root.ServerHandshake.toObject(message.handshake, options);
            if (options.oneofs)
                object.message = "handshake";
        }
        if (message.ping != null && message.hasOwnProperty("ping")) {
            object.ping = $root.Ping.toObject(message.ping, options);
            if (options.oneofs)
                object.message = "ping";
        }
        if (message.serverMessage != null && message.hasOwnProperty("serverMessage")) {
            object.serverMessage = $root.ServerMessage.toObject(message.serverMessage, options);
            if (options.oneofs)
                object.message = "serverMessage";
        }
        if (message.playerListUpdate != null && message.hasOwnProperty("playerListUpdate")) {
            object.playerListUpdate = $root.PlayerListUpdate.toObject(message.playerListUpdate, options);
            if (options.oneofs)
                object.message = "playerListUpdate";
        }
        if (message.playerUpdate != null && message.hasOwnProperty("playerUpdate")) {
            object.playerUpdate = $root.PlayerUpdate.toObject(message.playerUpdate, options);
            if (options.oneofs)
                object.message = "playerUpdate";
        }
        if (message.playerData != null && message.hasOwnProperty("playerData")) {
            object.playerData = $root.PlayerData.toObject(message.playerData, options);
            if (options.oneofs)
                object.message = "playerData";
        }
        if (message.metaData != null && message.hasOwnProperty("metaData")) {
            object.metaData = $root.MetaData.toObject(message.metaData, options);
            if (options.oneofs)
                object.message = "metaData";
        }
        if (message.chat != null && message.hasOwnProperty("chat")) {
            object.chat = $root.Chat.toObject(message.chat, options);
            if (options.oneofs)
                object.message = "chat";
        }
        return object;
    };

    /**
     * Converts this ServerClient to JSON.
     * @function toJSON
     * @memberof ServerClient
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerClient.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * MessageType enum.
     * @name ServerClient.MessageType
     * @enum {string}
     * @property {number} UNKNOWN=0 UNKNOWN value
     * @property {number} HANDSHAKE=2 HANDSHAKE value
     * @property {number} PING=3 PING value
     * @property {number} SERVER_MESSAGE=4 SERVER_MESSAGE value
     * @property {number} PLAYER_LIST_UPDATE=5 PLAYER_LIST_UPDATE value
     * @property {number} PLAYER_UPDATE=6 PLAYER_UPDATE value
     * @property {number} PLAYER_DATA=128 PLAYER_DATA value
     * @property {number} META_DATA=129 META_DATA value
     * @property {number} CHAT=130 CHAT value
     */
    ServerClient.MessageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[2] = "HANDSHAKE"] = 2;
        values[valuesById[3] = "PING"] = 3;
        values[valuesById[4] = "SERVER_MESSAGE"] = 4;
        values[valuesById[5] = "PLAYER_LIST_UPDATE"] = 5;
        values[valuesById[6] = "PLAYER_UPDATE"] = 6;
        values[valuesById[128] = "PLAYER_DATA"] = 128;
        values[valuesById[129] = "META_DATA"] = 129;
        values[valuesById[130] = "CHAT"] = 130;
        return values;
    })();

    return ServerClient;
})();

$root.ServerHandshake = (function() {

    /**
     * Properties of a ServerHandshake.
     * @exports IServerHandshake
     * @interface IServerHandshake
     * @property {number|null} [playerId] ServerHandshake playerId
     * @property {IGameMode|null} [gameMode] ServerHandshake gameMode
     * @property {IPlayerListUpdate|null} [playerList] ServerHandshake playerList
     */

    /**
     * Constructs a new ServerHandshake.
     * @exports ServerHandshake
     * @classdesc Represents a ServerHandshake.
     * @implements IServerHandshake
     * @constructor
     * @param {IServerHandshake=} [properties] Properties to set
     */
    function ServerHandshake(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerHandshake playerId.
     * @member {number} playerId
     * @memberof ServerHandshake
     * @instance
     */
    ServerHandshake.prototype.playerId = 0;

    /**
     * ServerHandshake gameMode.
     * @member {IGameMode|null|undefined} gameMode
     * @memberof ServerHandshake
     * @instance
     */
    ServerHandshake.prototype.gameMode = null;

    /**
     * ServerHandshake playerList.
     * @member {IPlayerListUpdate|null|undefined} playerList
     * @memberof ServerHandshake
     * @instance
     */
    ServerHandshake.prototype.playerList = null;

    /**
     * Creates a new ServerHandshake instance using the specified properties.
     * @function create
     * @memberof ServerHandshake
     * @static
     * @param {IServerHandshake=} [properties] Properties to set
     * @returns {ServerHandshake} ServerHandshake instance
     */
    ServerHandshake.create = function create(properties) {
        return new ServerHandshake(properties);
    };

    /**
     * Encodes the specified ServerHandshake message. Does not implicitly {@link ServerHandshake.verify|verify} messages.
     * @function encode
     * @memberof ServerHandshake
     * @static
     * @param {IServerHandshake} message ServerHandshake message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerHandshake.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.playerId);
        if (message.gameMode != null && message.hasOwnProperty("gameMode"))
            $root.GameMode.encode(message.gameMode, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.playerList != null && message.hasOwnProperty("playerList"))
            $root.PlayerListUpdate.encode(message.playerList, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ServerHandshake message, length delimited. Does not implicitly {@link ServerHandshake.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerHandshake
     * @static
     * @param {IServerHandshake} message ServerHandshake message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerHandshake.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerHandshake message from the specified reader or buffer.
     * @function decode
     * @memberof ServerHandshake
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerHandshake} ServerHandshake
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerHandshake.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerHandshake();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.playerId = reader.uint32();
                break;
            case 2:
                message.gameMode = $root.GameMode.decode(reader, reader.uint32());
                break;
            case 3:
                message.playerList = $root.PlayerListUpdate.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServerHandshake message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerHandshake
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerHandshake} ServerHandshake
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerHandshake.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerHandshake message.
     * @function verify
     * @memberof ServerHandshake
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerHandshake.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            if (!$util.isInteger(message.playerId))
                return "playerId: integer expected";
        if (message.gameMode != null && message.hasOwnProperty("gameMode")) {
            var error = $root.GameMode.verify(message.gameMode);
            if (error)
                return "gameMode." + error;
        }
        if (message.playerList != null && message.hasOwnProperty("playerList")) {
            var error = $root.PlayerListUpdate.verify(message.playerList);
            if (error)
                return "playerList." + error;
        }
        return null;
    };

    /**
     * Creates a ServerHandshake message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerHandshake
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerHandshake} ServerHandshake
     */
    ServerHandshake.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerHandshake)
            return object;
        var message = new $root.ServerHandshake();
        if (object.playerId != null)
            message.playerId = object.playerId >>> 0;
        if (object.gameMode != null) {
            if (typeof object.gameMode !== "object")
                throw TypeError(".ServerHandshake.gameMode: object expected");
            message.gameMode = $root.GameMode.fromObject(object.gameMode);
        }
        if (object.playerList != null) {
            if (typeof object.playerList !== "object")
                throw TypeError(".ServerHandshake.playerList: object expected");
            message.playerList = $root.PlayerListUpdate.fromObject(object.playerList);
        }
        return message;
    };

    /**
     * Creates a plain object from a ServerHandshake message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerHandshake
     * @static
     * @param {ServerHandshake} message ServerHandshake
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerHandshake.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.playerId = 0;
            object.gameMode = null;
            object.playerList = null;
        }
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            object.playerId = message.playerId;
        if (message.gameMode != null && message.hasOwnProperty("gameMode"))
            object.gameMode = $root.GameMode.toObject(message.gameMode, options);
        if (message.playerList != null && message.hasOwnProperty("playerList"))
            object.playerList = $root.PlayerListUpdate.toObject(message.playerList, options);
        return object;
    };

    /**
     * Converts this ServerHandshake to JSON.
     * @function toJSON
     * @memberof ServerHandshake
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerHandshake.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerHandshake;
})();

$root.GameMode = (function() {

    /**
     * Properties of a GameMode.
     * @exports IGameMode
     * @interface IGameMode
     * @property {GameMode.GameModeType|null} [gameMode] GameMode gameMode
     */

    /**
     * Constructs a new GameMode.
     * @exports GameMode
     * @classdesc Represents a GameMode.
     * @implements IGameMode
     * @constructor
     * @param {IGameMode=} [properties] Properties to set
     */
    function GameMode(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GameMode gameMode.
     * @member {GameMode.GameModeType} gameMode
     * @memberof GameMode
     * @instance
     */
    GameMode.prototype.gameMode = 0;

    /**
     * Creates a new GameMode instance using the specified properties.
     * @function create
     * @memberof GameMode
     * @static
     * @param {IGameMode=} [properties] Properties to set
     * @returns {GameMode} GameMode instance
     */
    GameMode.create = function create(properties) {
        return new GameMode(properties);
    };

    /**
     * Encodes the specified GameMode message. Does not implicitly {@link GameMode.verify|verify} messages.
     * @function encode
     * @memberof GameMode
     * @static
     * @param {IGameMode} message GameMode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameMode.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.gameMode != null && message.hasOwnProperty("gameMode"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameMode);
        return writer;
    };

    /**
     * Encodes the specified GameMode message, length delimited. Does not implicitly {@link GameMode.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GameMode
     * @static
     * @param {IGameMode} message GameMode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameMode.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GameMode message from the specified reader or buffer.
     * @function decode
     * @memberof GameMode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameMode} GameMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameMode.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMode();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.gameMode = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GameMode message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GameMode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GameMode} GameMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameMode.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GameMode message.
     * @function verify
     * @memberof GameMode
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GameMode.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.gameMode != null && message.hasOwnProperty("gameMode"))
            switch (message.gameMode) {
            default:
                return "gameMode: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 8:
                break;
            }
        return null;
    };

    /**
     * Creates a GameMode message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GameMode
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GameMode} GameMode
     */
    GameMode.fromObject = function fromObject(object) {
        if (object instanceof $root.GameMode)
            return object;
        var message = new $root.GameMode();
        switch (object.gameMode) {
        case "NONE":
        case 0:
            message.gameMode = 0;
            break;
        case "DEFAULT":
        case 1:
            message.gameMode = 1;
            break;
        case "THIRD_PERSON_SHOOTER":
        case 2:
            message.gameMode = 2;
            break;
        case "INTERACTIONLESS":
        case 3:
            message.gameMode = 3;
            break;
        case "PROP_HUNT":
        case 4:
            message.gameMode = 4;
            break;
        case "BOSS_RUSH":
        case 5:
            message.gameMode = 5;
            break;
        case "TAG":
        case 6:
            message.gameMode = 6;
            break;
        case "WARIO_WARE":
        case 8:
            message.gameMode = 8;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a GameMode message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GameMode
     * @static
     * @param {GameMode} message GameMode
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GameMode.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.gameMode = options.enums === String ? "NONE" : 0;
        if (message.gameMode != null && message.hasOwnProperty("gameMode"))
            object.gameMode = options.enums === String ? $root.GameMode.GameModeType[message.gameMode] : message.gameMode;
        return object;
    };

    /**
     * Converts this GameMode to JSON.
     * @function toJSON
     * @memberof GameMode
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GameMode.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * GameModeType enum.
     * @name GameMode.GameModeType
     * @enum {string}
     * @property {number} NONE=0 NONE value
     * @property {number} DEFAULT=1 DEFAULT value
     * @property {number} THIRD_PERSON_SHOOTER=2 THIRD_PERSON_SHOOTER value
     * @property {number} INTERACTIONLESS=3 INTERACTIONLESS value
     * @property {number} PROP_HUNT=4 PROP_HUNT value
     * @property {number} BOSS_RUSH=5 BOSS_RUSH value
     * @property {number} TAG=6 TAG value
     * @property {number} WARIO_WARE=8 WARIO_WARE value
     */
    GameMode.GameModeType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NONE"] = 0;
        values[valuesById[1] = "DEFAULT"] = 1;
        values[valuesById[2] = "THIRD_PERSON_SHOOTER"] = 2;
        values[valuesById[3] = "INTERACTIONLESS"] = 3;
        values[valuesById[4] = "PROP_HUNT"] = 4;
        values[valuesById[5] = "BOSS_RUSH"] = 5;
        values[valuesById[6] = "TAG"] = 6;
        values[valuesById[8] = "WARIO_WARE"] = 8;
        return values;
    })();

    return GameMode;
})();

$root.PlayerUpdate = (function() {

    /**
     * Properties of a PlayerUpdate.
     * @exports IPlayerUpdate
     * @interface IPlayerUpdate
     * @property {number|null} [playerId] PlayerUpdate playerId
     * @property {IPlayer|null} [player] PlayerUpdate player
     */

    /**
     * Constructs a new PlayerUpdate.
     * @exports PlayerUpdate
     * @classdesc Represents a PlayerUpdate.
     * @implements IPlayerUpdate
     * @constructor
     * @param {IPlayerUpdate=} [properties] Properties to set
     */
    function PlayerUpdate(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PlayerUpdate playerId.
     * @member {number} playerId
     * @memberof PlayerUpdate
     * @instance
     */
    PlayerUpdate.prototype.playerId = 0;

    /**
     * PlayerUpdate player.
     * @member {IPlayer|null|undefined} player
     * @memberof PlayerUpdate
     * @instance
     */
    PlayerUpdate.prototype.player = null;

    /**
     * Creates a new PlayerUpdate instance using the specified properties.
     * @function create
     * @memberof PlayerUpdate
     * @static
     * @param {IPlayerUpdate=} [properties] Properties to set
     * @returns {PlayerUpdate} PlayerUpdate instance
     */
    PlayerUpdate.create = function create(properties) {
        return new PlayerUpdate(properties);
    };

    /**
     * Encodes the specified PlayerUpdate message. Does not implicitly {@link PlayerUpdate.verify|verify} messages.
     * @function encode
     * @memberof PlayerUpdate
     * @static
     * @param {IPlayerUpdate} message PlayerUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerUpdate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.playerId);
        if (message.player != null && message.hasOwnProperty("player"))
            $root.Player.encode(message.player, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PlayerUpdate message, length delimited. Does not implicitly {@link PlayerUpdate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PlayerUpdate
     * @static
     * @param {IPlayerUpdate} message PlayerUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerUpdate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PlayerUpdate message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PlayerUpdate} PlayerUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerUpdate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerUpdate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.playerId = reader.uint32();
                break;
            case 2:
                message.player = $root.Player.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PlayerUpdate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PlayerUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PlayerUpdate} PlayerUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerUpdate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PlayerUpdate message.
     * @function verify
     * @memberof PlayerUpdate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PlayerUpdate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            if (!$util.isInteger(message.playerId))
                return "playerId: integer expected";
        if (message.player != null && message.hasOwnProperty("player")) {
            var error = $root.Player.verify(message.player);
            if (error)
                return "player." + error;
        }
        return null;
    };

    /**
     * Creates a PlayerUpdate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PlayerUpdate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PlayerUpdate} PlayerUpdate
     */
    PlayerUpdate.fromObject = function fromObject(object) {
        if (object instanceof $root.PlayerUpdate)
            return object;
        var message = new $root.PlayerUpdate();
        if (object.playerId != null)
            message.playerId = object.playerId >>> 0;
        if (object.player != null) {
            if (typeof object.player !== "object")
                throw TypeError(".PlayerUpdate.player: object expected");
            message.player = $root.Player.fromObject(object.player);
        }
        return message;
    };

    /**
     * Creates a plain object from a PlayerUpdate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PlayerUpdate
     * @static
     * @param {PlayerUpdate} message PlayerUpdate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PlayerUpdate.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.playerId = 0;
            object.player = null;
        }
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            object.playerId = message.playerId;
        if (message.player != null && message.hasOwnProperty("player"))
            object.player = $root.Player.toObject(message.player, options);
        return object;
    };

    /**
     * Converts this PlayerUpdate to JSON.
     * @function toJSON
     * @memberof PlayerUpdate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PlayerUpdate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PlayerUpdate;
})();

$root.PlayerListUpdate = (function() {

    /**
     * Properties of a PlayerListUpdate.
     * @exports IPlayerListUpdate
     * @interface IPlayerListUpdate
     * @property {Array.<IPlayerUpdate>|null} [playerUpdates] PlayerListUpdate playerUpdates
     */

    /**
     * Constructs a new PlayerListUpdate.
     * @exports PlayerListUpdate
     * @classdesc Represents a PlayerListUpdate.
     * @implements IPlayerListUpdate
     * @constructor
     * @param {IPlayerListUpdate=} [properties] Properties to set
     */
    function PlayerListUpdate(properties) {
        this.playerUpdates = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PlayerListUpdate playerUpdates.
     * @member {Array.<IPlayerUpdate>} playerUpdates
     * @memberof PlayerListUpdate
     * @instance
     */
    PlayerListUpdate.prototype.playerUpdates = $util.emptyArray;

    /**
     * Creates a new PlayerListUpdate instance using the specified properties.
     * @function create
     * @memberof PlayerListUpdate
     * @static
     * @param {IPlayerListUpdate=} [properties] Properties to set
     * @returns {PlayerListUpdate} PlayerListUpdate instance
     */
    PlayerListUpdate.create = function create(properties) {
        return new PlayerListUpdate(properties);
    };

    /**
     * Encodes the specified PlayerListUpdate message. Does not implicitly {@link PlayerListUpdate.verify|verify} messages.
     * @function encode
     * @memberof PlayerListUpdate
     * @static
     * @param {IPlayerListUpdate} message PlayerListUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerListUpdate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.playerUpdates != null && message.playerUpdates.length)
            for (var i = 0; i < message.playerUpdates.length; ++i)
                $root.PlayerUpdate.encode(message.playerUpdates[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PlayerListUpdate message, length delimited. Does not implicitly {@link PlayerListUpdate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PlayerListUpdate
     * @static
     * @param {IPlayerListUpdate} message PlayerListUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerListUpdate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PlayerListUpdate message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerListUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PlayerListUpdate} PlayerListUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerListUpdate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerListUpdate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.playerUpdates && message.playerUpdates.length))
                    message.playerUpdates = [];
                message.playerUpdates.push($root.PlayerUpdate.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PlayerListUpdate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PlayerListUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PlayerListUpdate} PlayerListUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerListUpdate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PlayerListUpdate message.
     * @function verify
     * @memberof PlayerListUpdate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PlayerListUpdate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.playerUpdates != null && message.hasOwnProperty("playerUpdates")) {
            if (!Array.isArray(message.playerUpdates))
                return "playerUpdates: array expected";
            for (var i = 0; i < message.playerUpdates.length; ++i) {
                var error = $root.PlayerUpdate.verify(message.playerUpdates[i]);
                if (error)
                    return "playerUpdates." + error;
            }
        }
        return null;
    };

    /**
     * Creates a PlayerListUpdate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PlayerListUpdate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PlayerListUpdate} PlayerListUpdate
     */
    PlayerListUpdate.fromObject = function fromObject(object) {
        if (object instanceof $root.PlayerListUpdate)
            return object;
        var message = new $root.PlayerListUpdate();
        if (object.playerUpdates) {
            if (!Array.isArray(object.playerUpdates))
                throw TypeError(".PlayerListUpdate.playerUpdates: array expected");
            message.playerUpdates = [];
            for (var i = 0; i < object.playerUpdates.length; ++i) {
                if (typeof object.playerUpdates[i] !== "object")
                    throw TypeError(".PlayerListUpdate.playerUpdates: object expected");
                message.playerUpdates[i] = $root.PlayerUpdate.fromObject(object.playerUpdates[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a PlayerListUpdate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PlayerListUpdate
     * @static
     * @param {PlayerListUpdate} message PlayerListUpdate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PlayerListUpdate.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.playerUpdates = [];
        if (message.playerUpdates && message.playerUpdates.length) {
            object.playerUpdates = [];
            for (var j = 0; j < message.playerUpdates.length; ++j)
                object.playerUpdates[j] = $root.PlayerUpdate.toObject(message.playerUpdates[j], options);
        }
        return object;
    };

    /**
     * Converts this PlayerListUpdate to JSON.
     * @function toJSON
     * @memberof PlayerListUpdate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PlayerListUpdate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PlayerListUpdate;
})();

$root.Player = (function() {

    /**
     * Properties of a Player.
     * @exports IPlayer
     * @interface IPlayer
     * @property {string|null} [username] Player username
     * @property {number|null} [characterId] Player characterId
     */

    /**
     * Constructs a new Player.
     * @exports Player
     * @classdesc Represents a Player.
     * @implements IPlayer
     * @constructor
     * @param {IPlayer=} [properties] Properties to set
     */
    function Player(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Player username.
     * @member {string} username
     * @memberof Player
     * @instance
     */
    Player.prototype.username = "";

    /**
     * Player characterId.
     * @member {number} characterId
     * @memberof Player
     * @instance
     */
    Player.prototype.characterId = 0;

    /**
     * Creates a new Player instance using the specified properties.
     * @function create
     * @memberof Player
     * @static
     * @param {IPlayer=} [properties] Properties to set
     * @returns {Player} Player instance
     */
    Player.create = function create(properties) {
        return new Player(properties);
    };

    /**
     * Encodes the specified Player message. Does not implicitly {@link Player.verify|verify} messages.
     * @function encode
     * @memberof Player
     * @static
     * @param {IPlayer} message Player message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Player.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.username != null && message.hasOwnProperty("username"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
        if (message.characterId != null && message.hasOwnProperty("characterId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.characterId);
        return writer;
    };

    /**
     * Encodes the specified Player message, length delimited. Does not implicitly {@link Player.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Player
     * @static
     * @param {IPlayer} message Player message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Player.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Player message from the specified reader or buffer.
     * @function decode
     * @memberof Player
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Player} Player
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Player.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Player();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.username = reader.string();
                break;
            case 2:
                message.characterId = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Player message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Player
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Player} Player
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Player.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Player message.
     * @function verify
     * @memberof Player
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Player.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.username != null && message.hasOwnProperty("username"))
            if (!$util.isString(message.username))
                return "username: string expected";
        if (message.characterId != null && message.hasOwnProperty("characterId"))
            if (!$util.isInteger(message.characterId))
                return "characterId: integer expected";
        return null;
    };

    /**
     * Creates a Player message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Player
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Player} Player
     */
    Player.fromObject = function fromObject(object) {
        if (object instanceof $root.Player)
            return object;
        var message = new $root.Player();
        if (object.username != null)
            message.username = String(object.username);
        if (object.characterId != null)
            message.characterId = object.characterId >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a Player message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Player
     * @static
     * @param {Player} message Player
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Player.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.username = "";
            object.characterId = 0;
        }
        if (message.username != null && message.hasOwnProperty("username"))
            object.username = message.username;
        if (message.characterId != null && message.hasOwnProperty("characterId"))
            object.characterId = message.characterId;
        return object;
    };

    /**
     * Converts this Player to JSON.
     * @function toJSON
     * @memberof Player
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Player.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Player;
})();

$root.Ping = (function() {

    /**
     * Properties of a Ping.
     * @exports IPing
     * @interface IPing
     */

    /**
     * Constructs a new Ping.
     * @exports Ping
     * @classdesc Represents a Ping.
     * @implements IPing
     * @constructor
     * @param {IPing=} [properties] Properties to set
     */
    function Ping(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Ping instance using the specified properties.
     * @function create
     * @memberof Ping
     * @static
     * @param {IPing=} [properties] Properties to set
     * @returns {Ping} Ping instance
     */
    Ping.create = function create(properties) {
        return new Ping(properties);
    };

    /**
     * Encodes the specified Ping message. Does not implicitly {@link Ping.verify|verify} messages.
     * @function encode
     * @memberof Ping
     * @static
     * @param {IPing} message Ping message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Ping.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified Ping message, length delimited. Does not implicitly {@link Ping.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Ping
     * @static
     * @param {IPing} message Ping message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Ping.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Ping message from the specified reader or buffer.
     * @function decode
     * @memberof Ping
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Ping} Ping
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Ping.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Ping();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Ping message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Ping
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Ping} Ping
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Ping.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Ping message.
     * @function verify
     * @memberof Ping
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Ping.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a Ping message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Ping
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Ping} Ping
     */
    Ping.fromObject = function fromObject(object) {
        if (object instanceof $root.Ping)
            return object;
        return new $root.Ping();
    };

    /**
     * Creates a plain object from a Ping message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Ping
     * @static
     * @param {Ping} message Ping
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Ping.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this Ping to JSON.
     * @function toJSON
     * @memberof Ping
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Ping.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Ping;
})();

$root.ServerMessage = (function() {

    /**
     * Properties of a ServerMessage.
     * @exports IServerMessage
     * @interface IServerMessage
     * @property {ServerMessage.MessageType|null} [messageType] ServerMessage messageType
     * @property {IConnectionDenied|null} [connectionDenied] ServerMessage connectionDenied
     * @property {IGameMode|null} [gameMode] ServerMessage gameMode
     * @property {IServerToken|null} [serverToken] ServerMessage serverToken
     * @property {IError|null} [error] ServerMessage error
     */

    /**
     * Constructs a new ServerMessage.
     * @exports ServerMessage
     * @classdesc Represents a ServerMessage.
     * @implements IServerMessage
     * @constructor
     * @param {IServerMessage=} [properties] Properties to set
     */
    function ServerMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerMessage messageType.
     * @member {ServerMessage.MessageType} messageType
     * @memberof ServerMessage
     * @instance
     */
    ServerMessage.prototype.messageType = 0;

    /**
     * ServerMessage connectionDenied.
     * @member {IConnectionDenied|null|undefined} connectionDenied
     * @memberof ServerMessage
     * @instance
     */
    ServerMessage.prototype.connectionDenied = null;

    /**
     * ServerMessage gameMode.
     * @member {IGameMode|null|undefined} gameMode
     * @memberof ServerMessage
     * @instance
     */
    ServerMessage.prototype.gameMode = null;

    /**
     * ServerMessage serverToken.
     * @member {IServerToken|null|undefined} serverToken
     * @memberof ServerMessage
     * @instance
     */
    ServerMessage.prototype.serverToken = null;

    /**
     * ServerMessage error.
     * @member {IError|null|undefined} error
     * @memberof ServerMessage
     * @instance
     */
    ServerMessage.prototype.error = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * ServerMessage message.
     * @member {"connectionDenied"|"gameMode"|"serverToken"|"error"|undefined} message
     * @memberof ServerMessage
     * @instance
     */
    Object.defineProperty(ServerMessage.prototype, "message", {
        get: $util.oneOfGetter($oneOfFields = ["connectionDenied", "gameMode", "serverToken", "error"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new ServerMessage instance using the specified properties.
     * @function create
     * @memberof ServerMessage
     * @static
     * @param {IServerMessage=} [properties] Properties to set
     * @returns {ServerMessage} ServerMessage instance
     */
    ServerMessage.create = function create(properties) {
        return new ServerMessage(properties);
    };

    /**
     * Encodes the specified ServerMessage message. Does not implicitly {@link ServerMessage.verify|verify} messages.
     * @function encode
     * @memberof ServerMessage
     * @static
     * @param {IServerMessage} message ServerMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.messageType != null && message.hasOwnProperty("messageType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.messageType);
        if (message.connectionDenied != null && message.hasOwnProperty("connectionDenied"))
            $root.ConnectionDenied.encode(message.connectionDenied, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.gameMode != null && message.hasOwnProperty("gameMode"))
            $root.GameMode.encode(message.gameMode, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.serverToken != null && message.hasOwnProperty("serverToken"))
            $root.ServerToken.encode(message.serverToken, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.error != null && message.hasOwnProperty("error"))
            $root.Error.encode(message.error, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ServerMessage message, length delimited. Does not implicitly {@link ServerMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerMessage
     * @static
     * @param {IServerMessage} message ServerMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ServerMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerMessage} ServerMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.messageType = reader.int32();
                break;
            case 2:
                message.connectionDenied = $root.ConnectionDenied.decode(reader, reader.uint32());
                break;
            case 3:
                message.gameMode = $root.GameMode.decode(reader, reader.uint32());
                break;
            case 4:
                message.serverToken = $root.ServerToken.decode(reader, reader.uint32());
                break;
            case 5:
                message.error = $root.Error.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServerMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerMessage} ServerMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerMessage message.
     * @function verify
     * @memberof ServerMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.messageType != null && message.hasOwnProperty("messageType"))
            switch (message.messageType) {
            default:
                return "messageType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        if (message.connectionDenied != null && message.hasOwnProperty("connectionDenied")) {
            properties.message = 1;
            {
                var error = $root.ConnectionDenied.verify(message.connectionDenied);
                if (error)
                    return "connectionDenied." + error;
            }
        }
        if (message.gameMode != null && message.hasOwnProperty("gameMode")) {
            if (properties.message === 1)
                return "message: multiple values";
            properties.message = 1;
            {
                var error = $root.GameMode.verify(message.gameMode);
                if (error)
                    return "gameMode." + error;
            }
        }
        if (message.serverToken != null && message.hasOwnProperty("serverToken")) {
            if (properties.message === 1)
                return "message: multiple values";
            properties.message = 1;
            {
                var error = $root.ServerToken.verify(message.serverToken);
                if (error)
                    return "serverToken." + error;
            }
        }
        if (message.error != null && message.hasOwnProperty("error")) {
            if (properties.message === 1)
                return "message: multiple values";
            properties.message = 1;
            {
                var error = $root.Error.verify(message.error);
                if (error)
                    return "error." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ServerMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerMessage} ServerMessage
     */
    ServerMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerMessage)
            return object;
        var message = new $root.ServerMessage();
        switch (object.messageType) {
        case "CONNECTION_DENIED":
        case 0:
            message.messageType = 0;
            break;
        case "GAME_MODE":
        case 1:
            message.messageType = 1;
            break;
        case "SERVER_TOKEN":
        case 2:
            message.messageType = 2;
            break;
        case "ERROR":
        case 3:
            message.messageType = 3;
            break;
        }
        if (object.connectionDenied != null) {
            if (typeof object.connectionDenied !== "object")
                throw TypeError(".ServerMessage.connectionDenied: object expected");
            message.connectionDenied = $root.ConnectionDenied.fromObject(object.connectionDenied);
        }
        if (object.gameMode != null) {
            if (typeof object.gameMode !== "object")
                throw TypeError(".ServerMessage.gameMode: object expected");
            message.gameMode = $root.GameMode.fromObject(object.gameMode);
        }
        if (object.serverToken != null) {
            if (typeof object.serverToken !== "object")
                throw TypeError(".ServerMessage.serverToken: object expected");
            message.serverToken = $root.ServerToken.fromObject(object.serverToken);
        }
        if (object.error != null) {
            if (typeof object.error !== "object")
                throw TypeError(".ServerMessage.error: object expected");
            message.error = $root.Error.fromObject(object.error);
        }
        return message;
    };

    /**
     * Creates a plain object from a ServerMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerMessage
     * @static
     * @param {ServerMessage} message ServerMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.messageType = options.enums === String ? "CONNECTION_DENIED" : 0;
        if (message.messageType != null && message.hasOwnProperty("messageType"))
            object.messageType = options.enums === String ? $root.ServerMessage.MessageType[message.messageType] : message.messageType;
        if (message.connectionDenied != null && message.hasOwnProperty("connectionDenied")) {
            object.connectionDenied = $root.ConnectionDenied.toObject(message.connectionDenied, options);
            if (options.oneofs)
                object.message = "connectionDenied";
        }
        if (message.gameMode != null && message.hasOwnProperty("gameMode")) {
            object.gameMode = $root.GameMode.toObject(message.gameMode, options);
            if (options.oneofs)
                object.message = "gameMode";
        }
        if (message.serverToken != null && message.hasOwnProperty("serverToken")) {
            object.serverToken = $root.ServerToken.toObject(message.serverToken, options);
            if (options.oneofs)
                object.message = "serverToken";
        }
        if (message.error != null && message.hasOwnProperty("error")) {
            object.error = $root.Error.toObject(message.error, options);
            if (options.oneofs)
                object.message = "error";
        }
        return object;
    };

    /**
     * Converts this ServerMessage to JSON.
     * @function toJSON
     * @memberof ServerMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * MessageType enum.
     * @name ServerMessage.MessageType
     * @enum {string}
     * @property {number} CONNECTION_DENIED=0 CONNECTION_DENIED value
     * @property {number} GAME_MODE=1 GAME_MODE value
     * @property {number} SERVER_TOKEN=2 SERVER_TOKEN value
     * @property {number} ERROR=3 ERROR value
     */
    ServerMessage.MessageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CONNECTION_DENIED"] = 0;
        values[valuesById[1] = "GAME_MODE"] = 1;
        values[valuesById[2] = "SERVER_TOKEN"] = 2;
        values[valuesById[3] = "ERROR"] = 3;
        return values;
    })();

    return ServerMessage;
})();

$root.ServerToken = (function() {

    /**
     * Properties of a ServerToken.
     * @exports IServerToken
     * @interface IServerToken
     * @property {ServerToken.TokenType|null} [tokenType] ServerToken tokenType
     * @property {string|null} [signature] ServerToken signature
     */

    /**
     * Constructs a new ServerToken.
     * @exports ServerToken
     * @classdesc Represents a ServerToken.
     * @implements IServerToken
     * @constructor
     * @param {IServerToken=} [properties] Properties to set
     */
    function ServerToken(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerToken tokenType.
     * @member {ServerToken.TokenType} tokenType
     * @memberof ServerToken
     * @instance
     */
    ServerToken.prototype.tokenType = 0;

    /**
     * ServerToken signature.
     * @member {string} signature
     * @memberof ServerToken
     * @instance
     */
    ServerToken.prototype.signature = "";

    /**
     * Creates a new ServerToken instance using the specified properties.
     * @function create
     * @memberof ServerToken
     * @static
     * @param {IServerToken=} [properties] Properties to set
     * @returns {ServerToken} ServerToken instance
     */
    ServerToken.create = function create(properties) {
        return new ServerToken(properties);
    };

    /**
     * Encodes the specified ServerToken message. Does not implicitly {@link ServerToken.verify|verify} messages.
     * @function encode
     * @memberof ServerToken
     * @static
     * @param {IServerToken} message ServerToken message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerToken.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.tokenType != null && message.hasOwnProperty("tokenType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tokenType);
        if (message.signature != null && message.hasOwnProperty("signature"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.signature);
        return writer;
    };

    /**
     * Encodes the specified ServerToken message, length delimited. Does not implicitly {@link ServerToken.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerToken
     * @static
     * @param {IServerToken} message ServerToken message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerToken.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerToken message from the specified reader or buffer.
     * @function decode
     * @memberof ServerToken
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerToken} ServerToken
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerToken.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerToken();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.tokenType = reader.int32();
                break;
            case 2:
                message.signature = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServerToken message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerToken
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerToken} ServerToken
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerToken.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerToken message.
     * @function verify
     * @memberof ServerToken
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerToken.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.tokenType != null && message.hasOwnProperty("tokenType"))
            switch (message.tokenType) {
            default:
                return "tokenType: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.signature != null && message.hasOwnProperty("signature"))
            if (!$util.isString(message.signature))
                return "signature: string expected";
        return null;
    };

    /**
     * Creates a ServerToken message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerToken
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerToken} ServerToken
     */
    ServerToken.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerToken)
            return object;
        var message = new $root.ServerToken();
        switch (object.tokenType) {
        case "GRANT":
        case 0:
            message.tokenType = 0;
            break;
        case "LOSE":
        case 1:
            message.tokenType = 1;
            break;
        }
        if (object.signature != null)
            message.signature = String(object.signature);
        return message;
    };

    /**
     * Creates a plain object from a ServerToken message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerToken
     * @static
     * @param {ServerToken} message ServerToken
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerToken.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.tokenType = options.enums === String ? "GRANT" : 0;
            object.signature = "";
        }
        if (message.tokenType != null && message.hasOwnProperty("tokenType"))
            object.tokenType = options.enums === String ? $root.ServerToken.TokenType[message.tokenType] : message.tokenType;
        if (message.signature != null && message.hasOwnProperty("signature"))
            object.signature = message.signature;
        return object;
    };

    /**
     * Converts this ServerToken to JSON.
     * @function toJSON
     * @memberof ServerToken
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerToken.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * TokenType enum.
     * @name ServerToken.TokenType
     * @enum {string}
     * @property {number} GRANT=0 GRANT value
     * @property {number} LOSE=1 LOSE value
     */
    ServerToken.TokenType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GRANT"] = 0;
        values[valuesById[1] = "LOSE"] = 1;
        return values;
    })();

    return ServerToken;
})();

$root.Error = (function() {

    /**
     * Properties of an Error.
     * @exports IError
     * @interface IError
     * @property {Error.ErrorType|null} [errorType] Error errorType
     * @property {string|null} [message] Error message
     */

    /**
     * Constructs a new Error.
     * @exports Error
     * @classdesc Represents an Error.
     * @implements IError
     * @constructor
     * @param {IError=} [properties] Properties to set
     */
    function Error(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Error errorType.
     * @member {Error.ErrorType} errorType
     * @memberof Error
     * @instance
     */
    Error.prototype.errorType = 0;

    /**
     * Error message.
     * @member {string} message
     * @memberof Error
     * @instance
     */
    Error.prototype.message = "";

    /**
     * Creates a new Error instance using the specified properties.
     * @function create
     * @memberof Error
     * @static
     * @param {IError=} [properties] Properties to set
     * @returns {Error} Error instance
     */
    Error.create = function create(properties) {
        return new Error(properties);
    };

    /**
     * Encodes the specified Error message. Does not implicitly {@link Error.verify|verify} messages.
     * @function encode
     * @memberof Error
     * @static
     * @param {IError} message Error message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Error.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.errorType != null && message.hasOwnProperty("errorType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorType);
        if (message.message != null && message.hasOwnProperty("message"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
        return writer;
    };

    /**
     * Encodes the specified Error message, length delimited. Does not implicitly {@link Error.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Error
     * @static
     * @param {IError} message Error message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Error.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Error message from the specified reader or buffer.
     * @function decode
     * @memberof Error
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Error} Error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Error.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Error();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.errorType = reader.int32();
                break;
            case 2:
                message.message = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Error message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Error
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Error} Error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Error.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Error message.
     * @function verify
     * @memberof Error
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Error.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.errorType != null && message.hasOwnProperty("errorType"))
            switch (message.errorType) {
            default:
                return "errorType: enum value expected";
            case 0:
            case 400:
            case 401:
            case 429:
            case 500:
                break;
            }
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        return null;
    };

    /**
     * Creates an Error message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Error
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Error} Error
     */
    Error.fromObject = function fromObject(object) {
        if (object instanceof $root.Error)
            return object;
        var message = new $root.Error();
        switch (object.errorType) {
        case "UNKNOWN":
        case 0:
            message.errorType = 0;
            break;
        case "BAD_REQUEST":
        case 400:
            message.errorType = 400;
            break;
        case "UNAUTHORIZED":
        case 401:
            message.errorType = 401;
            break;
        case "TOO_MANY_REQUESTS":
        case 429:
            message.errorType = 429;
            break;
        case "INTERNAL_SERVER_ERROR":
        case 500:
            message.errorType = 500;
            break;
        }
        if (object.message != null)
            message.message = String(object.message);
        return message;
    };

    /**
     * Creates a plain object from an Error message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Error
     * @static
     * @param {Error} message Error
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Error.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.errorType = options.enums === String ? "UNKNOWN" : 0;
            object.message = "";
        }
        if (message.errorType != null && message.hasOwnProperty("errorType"))
            object.errorType = options.enums === String ? $root.Error.ErrorType[message.errorType] : message.errorType;
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        return object;
    };

    /**
     * Converts this Error to JSON.
     * @function toJSON
     * @memberof Error
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Error.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * ErrorType enum.
     * @name Error.ErrorType
     * @enum {string}
     * @property {number} UNKNOWN=0 UNKNOWN value
     * @property {number} BAD_REQUEST=400 BAD_REQUEST value
     * @property {number} UNAUTHORIZED=401 UNAUTHORIZED value
     * @property {number} TOO_MANY_REQUESTS=429 TOO_MANY_REQUESTS value
     * @property {number} INTERNAL_SERVER_ERROR=500 INTERNAL_SERVER_ERROR value
     */
    Error.ErrorType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[400] = "BAD_REQUEST"] = 400;
        values[valuesById[401] = "UNAUTHORIZED"] = 401;
        values[valuesById[429] = "TOO_MANY_REQUESTS"] = 429;
        values[valuesById[500] = "INTERNAL_SERVER_ERROR"] = 500;
        return values;
    })();

    return Error;
})();

$root.ConnectionDenied = (function() {

    /**
     * Properties of a ConnectionDenied.
     * @exports IConnectionDenied
     * @interface IConnectionDenied
     * @property {ConnectionDenied.Reason|null} [reason] ConnectionDenied reason
     * @property {IServerFull|null} [serverFull] ConnectionDenied serverFull
     * @property {IWrongVersion|null} [wrongVersion] ConnectionDenied wrongVersion
     */

    /**
     * Constructs a new ConnectionDenied.
     * @exports ConnectionDenied
     * @classdesc Represents a ConnectionDenied.
     * @implements IConnectionDenied
     * @constructor
     * @param {IConnectionDenied=} [properties] Properties to set
     */
    function ConnectionDenied(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ConnectionDenied reason.
     * @member {ConnectionDenied.Reason} reason
     * @memberof ConnectionDenied
     * @instance
     */
    ConnectionDenied.prototype.reason = 0;

    /**
     * ConnectionDenied serverFull.
     * @member {IServerFull|null|undefined} serverFull
     * @memberof ConnectionDenied
     * @instance
     */
    ConnectionDenied.prototype.serverFull = null;

    /**
     * ConnectionDenied wrongVersion.
     * @member {IWrongVersion|null|undefined} wrongVersion
     * @memberof ConnectionDenied
     * @instance
     */
    ConnectionDenied.prototype.wrongVersion = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * ConnectionDenied message.
     * @member {"serverFull"|"wrongVersion"|undefined} message
     * @memberof ConnectionDenied
     * @instance
     */
    Object.defineProperty(ConnectionDenied.prototype, "message", {
        get: $util.oneOfGetter($oneOfFields = ["serverFull", "wrongVersion"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new ConnectionDenied instance using the specified properties.
     * @function create
     * @memberof ConnectionDenied
     * @static
     * @param {IConnectionDenied=} [properties] Properties to set
     * @returns {ConnectionDenied} ConnectionDenied instance
     */
    ConnectionDenied.create = function create(properties) {
        return new ConnectionDenied(properties);
    };

    /**
     * Encodes the specified ConnectionDenied message. Does not implicitly {@link ConnectionDenied.verify|verify} messages.
     * @function encode
     * @memberof ConnectionDenied
     * @static
     * @param {IConnectionDenied} message ConnectionDenied message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConnectionDenied.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.reason != null && message.hasOwnProperty("reason"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.reason);
        if (message.serverFull != null && message.hasOwnProperty("serverFull"))
            $root.ServerFull.encode(message.serverFull, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.wrongVersion != null && message.hasOwnProperty("wrongVersion"))
            $root.WrongVersion.encode(message.wrongVersion, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ConnectionDenied message, length delimited. Does not implicitly {@link ConnectionDenied.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ConnectionDenied
     * @static
     * @param {IConnectionDenied} message ConnectionDenied message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConnectionDenied.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ConnectionDenied message from the specified reader or buffer.
     * @function decode
     * @memberof ConnectionDenied
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ConnectionDenied} ConnectionDenied
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConnectionDenied.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ConnectionDenied();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.reason = reader.int32();
                break;
            case 2:
                message.serverFull = $root.ServerFull.decode(reader, reader.uint32());
                break;
            case 3:
                message.wrongVersion = $root.WrongVersion.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ConnectionDenied message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ConnectionDenied
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ConnectionDenied} ConnectionDenied
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConnectionDenied.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ConnectionDenied message.
     * @function verify
     * @memberof ConnectionDenied
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ConnectionDenied.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.reason != null && message.hasOwnProperty("reason"))
            switch (message.reason) {
            default:
                return "reason: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.serverFull != null && message.hasOwnProperty("serverFull")) {
            properties.message = 1;
            {
                var error = $root.ServerFull.verify(message.serverFull);
                if (error)
                    return "serverFull." + error;
            }
        }
        if (message.wrongVersion != null && message.hasOwnProperty("wrongVersion")) {
            if (properties.message === 1)
                return "message: multiple values";
            properties.message = 1;
            {
                var error = $root.WrongVersion.verify(message.wrongVersion);
                if (error)
                    return "wrongVersion." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ConnectionDenied message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ConnectionDenied
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ConnectionDenied} ConnectionDenied
     */
    ConnectionDenied.fromObject = function fromObject(object) {
        if (object instanceof $root.ConnectionDenied)
            return object;
        var message = new $root.ConnectionDenied();
        switch (object.reason) {
        case "SERVER_FULL":
        case 0:
            message.reason = 0;
            break;
        case "WRONG_VERSION":
        case 1:
            message.reason = 1;
            break;
        }
        if (object.serverFull != null) {
            if (typeof object.serverFull !== "object")
                throw TypeError(".ConnectionDenied.serverFull: object expected");
            message.serverFull = $root.ServerFull.fromObject(object.serverFull);
        }
        if (object.wrongVersion != null) {
            if (typeof object.wrongVersion !== "object")
                throw TypeError(".ConnectionDenied.wrongVersion: object expected");
            message.wrongVersion = $root.WrongVersion.fromObject(object.wrongVersion);
        }
        return message;
    };

    /**
     * Creates a plain object from a ConnectionDenied message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ConnectionDenied
     * @static
     * @param {ConnectionDenied} message ConnectionDenied
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ConnectionDenied.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.reason = options.enums === String ? "SERVER_FULL" : 0;
        if (message.reason != null && message.hasOwnProperty("reason"))
            object.reason = options.enums === String ? $root.ConnectionDenied.Reason[message.reason] : message.reason;
        if (message.serverFull != null && message.hasOwnProperty("serverFull")) {
            object.serverFull = $root.ServerFull.toObject(message.serverFull, options);
            if (options.oneofs)
                object.message = "serverFull";
        }
        if (message.wrongVersion != null && message.hasOwnProperty("wrongVersion")) {
            object.wrongVersion = $root.WrongVersion.toObject(message.wrongVersion, options);
            if (options.oneofs)
                object.message = "wrongVersion";
        }
        return object;
    };

    /**
     * Converts this ConnectionDenied to JSON.
     * @function toJSON
     * @memberof ConnectionDenied
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ConnectionDenied.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Reason enum.
     * @name ConnectionDenied.Reason
     * @enum {string}
     * @property {number} SERVER_FULL=0 SERVER_FULL value
     * @property {number} WRONG_VERSION=1 WRONG_VERSION value
     */
    ConnectionDenied.Reason = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SERVER_FULL"] = 0;
        values[valuesById[1] = "WRONG_VERSION"] = 1;
        return values;
    })();

    return ConnectionDenied;
})();

$root.ServerFull = (function() {

    /**
     * Properties of a ServerFull.
     * @exports IServerFull
     * @interface IServerFull
     * @property {number|null} [maxPlayers] ServerFull maxPlayers
     */

    /**
     * Constructs a new ServerFull.
     * @exports ServerFull
     * @classdesc Represents a ServerFull.
     * @implements IServerFull
     * @constructor
     * @param {IServerFull=} [properties] Properties to set
     */
    function ServerFull(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerFull maxPlayers.
     * @member {number} maxPlayers
     * @memberof ServerFull
     * @instance
     */
    ServerFull.prototype.maxPlayers = 0;

    /**
     * Creates a new ServerFull instance using the specified properties.
     * @function create
     * @memberof ServerFull
     * @static
     * @param {IServerFull=} [properties] Properties to set
     * @returns {ServerFull} ServerFull instance
     */
    ServerFull.create = function create(properties) {
        return new ServerFull(properties);
    };

    /**
     * Encodes the specified ServerFull message. Does not implicitly {@link ServerFull.verify|verify} messages.
     * @function encode
     * @memberof ServerFull
     * @static
     * @param {IServerFull} message ServerFull message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerFull.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.maxPlayers != null && message.hasOwnProperty("maxPlayers"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.maxPlayers);
        return writer;
    };

    /**
     * Encodes the specified ServerFull message, length delimited. Does not implicitly {@link ServerFull.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerFull
     * @static
     * @param {IServerFull} message ServerFull message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerFull.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerFull message from the specified reader or buffer.
     * @function decode
     * @memberof ServerFull
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerFull} ServerFull
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerFull.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerFull();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.maxPlayers = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServerFull message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerFull
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerFull} ServerFull
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerFull.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerFull message.
     * @function verify
     * @memberof ServerFull
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerFull.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.maxPlayers != null && message.hasOwnProperty("maxPlayers"))
            if (!$util.isInteger(message.maxPlayers))
                return "maxPlayers: integer expected";
        return null;
    };

    /**
     * Creates a ServerFull message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerFull
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerFull} ServerFull
     */
    ServerFull.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerFull)
            return object;
        var message = new $root.ServerFull();
        if (object.maxPlayers != null)
            message.maxPlayers = object.maxPlayers >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a ServerFull message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerFull
     * @static
     * @param {ServerFull} message ServerFull
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerFull.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.maxPlayers = 0;
        if (message.maxPlayers != null && message.hasOwnProperty("maxPlayers"))
            object.maxPlayers = message.maxPlayers;
        return object;
    };

    /**
     * Converts this ServerFull to JSON.
     * @function toJSON
     * @memberof ServerFull
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerFull.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerFull;
})();

$root.WrongVersion = (function() {

    /**
     * Properties of a WrongVersion.
     * @exports IWrongVersion
     * @interface IWrongVersion
     * @property {number|null} [majorVersion] WrongVersion majorVersion
     * @property {number|null} [minorVersion] WrongVersion minorVersion
     */

    /**
     * Constructs a new WrongVersion.
     * @exports WrongVersion
     * @classdesc Represents a WrongVersion.
     * @implements IWrongVersion
     * @constructor
     * @param {IWrongVersion=} [properties] Properties to set
     */
    function WrongVersion(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WrongVersion majorVersion.
     * @member {number} majorVersion
     * @memberof WrongVersion
     * @instance
     */
    WrongVersion.prototype.majorVersion = 0;

    /**
     * WrongVersion minorVersion.
     * @member {number} minorVersion
     * @memberof WrongVersion
     * @instance
     */
    WrongVersion.prototype.minorVersion = 0;

    /**
     * Creates a new WrongVersion instance using the specified properties.
     * @function create
     * @memberof WrongVersion
     * @static
     * @param {IWrongVersion=} [properties] Properties to set
     * @returns {WrongVersion} WrongVersion instance
     */
    WrongVersion.create = function create(properties) {
        return new WrongVersion(properties);
    };

    /**
     * Encodes the specified WrongVersion message. Does not implicitly {@link WrongVersion.verify|verify} messages.
     * @function encode
     * @memberof WrongVersion
     * @static
     * @param {IWrongVersion} message WrongVersion message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WrongVersion.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.majorVersion != null && message.hasOwnProperty("majorVersion"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.majorVersion);
        if (message.minorVersion != null && message.hasOwnProperty("minorVersion"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.minorVersion);
        return writer;
    };

    /**
     * Encodes the specified WrongVersion message, length delimited. Does not implicitly {@link WrongVersion.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WrongVersion
     * @static
     * @param {IWrongVersion} message WrongVersion message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WrongVersion.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WrongVersion message from the specified reader or buffer.
     * @function decode
     * @memberof WrongVersion
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WrongVersion} WrongVersion
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WrongVersion.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WrongVersion();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.majorVersion = reader.uint32();
                break;
            case 2:
                message.minorVersion = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a WrongVersion message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WrongVersion
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WrongVersion} WrongVersion
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WrongVersion.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WrongVersion message.
     * @function verify
     * @memberof WrongVersion
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WrongVersion.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.majorVersion != null && message.hasOwnProperty("majorVersion"))
            if (!$util.isInteger(message.majorVersion))
                return "majorVersion: integer expected";
        if (message.minorVersion != null && message.hasOwnProperty("minorVersion"))
            if (!$util.isInteger(message.minorVersion))
                return "minorVersion: integer expected";
        return null;
    };

    /**
     * Creates a WrongVersion message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof WrongVersion
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {WrongVersion} WrongVersion
     */
    WrongVersion.fromObject = function fromObject(object) {
        if (object instanceof $root.WrongVersion)
            return object;
        var message = new $root.WrongVersion();
        if (object.majorVersion != null)
            message.majorVersion = object.majorVersion >>> 0;
        if (object.minorVersion != null)
            message.minorVersion = object.minorVersion >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a WrongVersion message. Also converts values to other types if specified.
     * @function toObject
     * @memberof WrongVersion
     * @static
     * @param {WrongVersion} message WrongVersion
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WrongVersion.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.majorVersion = 0;
            object.minorVersion = 0;
        }
        if (message.majorVersion != null && message.hasOwnProperty("majorVersion"))
            object.majorVersion = message.majorVersion;
        if (message.minorVersion != null && message.hasOwnProperty("minorVersion"))
            object.minorVersion = message.minorVersion;
        return object;
    };

    /**
     * Converts this WrongVersion to JSON.
     * @function toJSON
     * @memberof WrongVersion
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WrongVersion.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WrongVersion;
})();

$root.PlayerData = (function() {

    /**
     * Properties of a PlayerData.
     * @exports IPlayerData
     * @interface IPlayerData
     * @property {number|null} [playerLength] PlayerData playerLength
     * @property {number|null} [dataLength] PlayerData dataLength
     * @property {Uint8Array|null} [playerData] PlayerData playerData
     */

    /**
     * Constructs a new PlayerData.
     * @exports PlayerData
     * @classdesc Represents a PlayerData.
     * @implements IPlayerData
     * @constructor
     * @param {IPlayerData=} [properties] Properties to set
     */
    function PlayerData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PlayerData playerLength.
     * @member {number} playerLength
     * @memberof PlayerData
     * @instance
     */
    PlayerData.prototype.playerLength = 0;

    /**
     * PlayerData dataLength.
     * @member {number} dataLength
     * @memberof PlayerData
     * @instance
     */
    PlayerData.prototype.dataLength = 0;

    /**
     * PlayerData playerData.
     * @member {Uint8Array} playerData
     * @memberof PlayerData
     * @instance
     */
    PlayerData.prototype.playerData = $util.newBuffer([]);

    /**
     * Creates a new PlayerData instance using the specified properties.
     * @function create
     * @memberof PlayerData
     * @static
     * @param {IPlayerData=} [properties] Properties to set
     * @returns {PlayerData} PlayerData instance
     */
    PlayerData.create = function create(properties) {
        return new PlayerData(properties);
    };

    /**
     * Encodes the specified PlayerData message. Does not implicitly {@link PlayerData.verify|verify} messages.
     * @function encode
     * @memberof PlayerData
     * @static
     * @param {IPlayerData} message PlayerData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.playerLength != null && message.hasOwnProperty("playerLength"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.playerLength);
        if (message.dataLength != null && message.hasOwnProperty("dataLength"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.dataLength);
        if (message.playerData != null && message.hasOwnProperty("playerData"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.playerData);
        return writer;
    };

    /**
     * Encodes the specified PlayerData message, length delimited. Does not implicitly {@link PlayerData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PlayerData
     * @static
     * @param {IPlayerData} message PlayerData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PlayerData message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PlayerData} PlayerData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.playerLength = reader.uint32();
                break;
            case 2:
                message.dataLength = reader.uint32();
                break;
            case 3:
                message.playerData = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PlayerData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PlayerData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PlayerData} PlayerData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PlayerData message.
     * @function verify
     * @memberof PlayerData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PlayerData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.playerLength != null && message.hasOwnProperty("playerLength"))
            if (!$util.isInteger(message.playerLength))
                return "playerLength: integer expected";
        if (message.dataLength != null && message.hasOwnProperty("dataLength"))
            if (!$util.isInteger(message.dataLength))
                return "dataLength: integer expected";
        if (message.playerData != null && message.hasOwnProperty("playerData"))
            if (!(message.playerData && typeof message.playerData.length === "number" || $util.isString(message.playerData)))
                return "playerData: buffer expected";
        return null;
    };

    /**
     * Creates a PlayerData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PlayerData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PlayerData} PlayerData
     */
    PlayerData.fromObject = function fromObject(object) {
        if (object instanceof $root.PlayerData)
            return object;
        var message = new $root.PlayerData();
        if (object.playerLength != null)
            message.playerLength = object.playerLength >>> 0;
        if (object.dataLength != null)
            message.dataLength = object.dataLength >>> 0;
        if (object.playerData != null)
            if (typeof object.playerData === "string")
                $util.base64.decode(object.playerData, message.playerData = $util.newBuffer($util.base64.length(object.playerData)), 0);
            else if (object.playerData.length)
                message.playerData = object.playerData;
        return message;
    };

    /**
     * Creates a plain object from a PlayerData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PlayerData
     * @static
     * @param {PlayerData} message PlayerData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PlayerData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.playerLength = 0;
            object.dataLength = 0;
            object.playerData = options.bytes === String ? "" : [];
        }
        if (message.playerLength != null && message.hasOwnProperty("playerLength"))
            object.playerLength = message.playerLength;
        if (message.dataLength != null && message.hasOwnProperty("dataLength"))
            object.dataLength = message.dataLength;
        if (message.playerData != null && message.hasOwnProperty("playerData"))
            object.playerData = options.bytes === String ? $util.base64.encode(message.playerData, 0, message.playerData.length) : options.bytes === Array ? Array.prototype.slice.call(message.playerData) : message.playerData;
        return object;
    };

    /**
     * Converts this PlayerData to JSON.
     * @function toJSON
     * @memberof PlayerData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PlayerData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PlayerData;
})();

$root.Meta = (function() {

    /**
     * Properties of a Meta.
     * @exports IMeta
     * @interface IMeta
     * @property {number|null} [length] Meta length
     * @property {number|null} [address] Meta address
     * @property {Uint8Array|null} [data] Meta data
     */

    /**
     * Constructs a new Meta.
     * @exports Meta
     * @classdesc Represents a Meta.
     * @implements IMeta
     * @constructor
     * @param {IMeta=} [properties] Properties to set
     */
    function Meta(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Meta length.
     * @member {number} length
     * @memberof Meta
     * @instance
     */
    Meta.prototype.length = 0;

    /**
     * Meta address.
     * @member {number} address
     * @memberof Meta
     * @instance
     */
    Meta.prototype.address = 0;

    /**
     * Meta data.
     * @member {Uint8Array} data
     * @memberof Meta
     * @instance
     */
    Meta.prototype.data = $util.newBuffer([]);

    /**
     * Creates a new Meta instance using the specified properties.
     * @function create
     * @memberof Meta
     * @static
     * @param {IMeta=} [properties] Properties to set
     * @returns {Meta} Meta instance
     */
    Meta.create = function create(properties) {
        return new Meta(properties);
    };

    /**
     * Encodes the specified Meta message. Does not implicitly {@link Meta.verify|verify} messages.
     * @function encode
     * @memberof Meta
     * @static
     * @param {IMeta} message Meta message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Meta.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.length != null && message.hasOwnProperty("length"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.length);
        if (message.address != null && message.hasOwnProperty("address"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.address);
        if (message.data != null && message.hasOwnProperty("data"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
        return writer;
    };

    /**
     * Encodes the specified Meta message, length delimited. Does not implicitly {@link Meta.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Meta
     * @static
     * @param {IMeta} message Meta message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Meta.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Meta message from the specified reader or buffer.
     * @function decode
     * @memberof Meta
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Meta} Meta
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Meta.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Meta();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.length = reader.uint32();
                break;
            case 2:
                message.address = reader.uint32();
                break;
            case 3:
                message.data = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Meta message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Meta
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Meta} Meta
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Meta.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Meta message.
     * @function verify
     * @memberof Meta
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Meta.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.length != null && message.hasOwnProperty("length"))
            if (!$util.isInteger(message.length))
                return "length: integer expected";
        if (message.address != null && message.hasOwnProperty("address"))
            if (!$util.isInteger(message.address))
                return "address: integer expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        return null;
    };

    /**
     * Creates a Meta message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Meta
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Meta} Meta
     */
    Meta.fromObject = function fromObject(object) {
        if (object instanceof $root.Meta)
            return object;
        var message = new $root.Meta();
        if (object.length != null)
            message.length = object.length >>> 0;
        if (object.address != null)
            message.address = object.address >>> 0;
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        return message;
    };

    /**
     * Creates a plain object from a Meta message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Meta
     * @static
     * @param {Meta} message Meta
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Meta.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.length = 0;
            object.address = 0;
            object.data = options.bytes === String ? "" : [];
        }
        if (message.length != null && message.hasOwnProperty("length"))
            object.length = message.length;
        if (message.address != null && message.hasOwnProperty("address"))
            object.address = message.address;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        return object;
    };

    /**
     * Converts this Meta to JSON.
     * @function toJSON
     * @memberof Meta
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Meta.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Meta;
})();

$root.MetaData = (function() {

    /**
     * Properties of a MetaData.
     * @exports IMetaData
     * @interface IMetaData
     * @property {Array.<IMeta>|null} [metaData] MetaData metaData
     */

    /**
     * Constructs a new MetaData.
     * @exports MetaData
     * @classdesc Represents a MetaData.
     * @implements IMetaData
     * @constructor
     * @param {IMetaData=} [properties] Properties to set
     */
    function MetaData(properties) {
        this.metaData = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MetaData metaData.
     * @member {Array.<IMeta>} metaData
     * @memberof MetaData
     * @instance
     */
    MetaData.prototype.metaData = $util.emptyArray;

    /**
     * Creates a new MetaData instance using the specified properties.
     * @function create
     * @memberof MetaData
     * @static
     * @param {IMetaData=} [properties] Properties to set
     * @returns {MetaData} MetaData instance
     */
    MetaData.create = function create(properties) {
        return new MetaData(properties);
    };

    /**
     * Encodes the specified MetaData message. Does not implicitly {@link MetaData.verify|verify} messages.
     * @function encode
     * @memberof MetaData
     * @static
     * @param {IMetaData} message MetaData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MetaData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.metaData != null && message.metaData.length)
            for (var i = 0; i < message.metaData.length; ++i)
                $root.Meta.encode(message.metaData[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified MetaData message, length delimited. Does not implicitly {@link MetaData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MetaData
     * @static
     * @param {IMetaData} message MetaData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MetaData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MetaData message from the specified reader or buffer.
     * @function decode
     * @memberof MetaData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MetaData} MetaData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MetaData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MetaData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.metaData && message.metaData.length))
                    message.metaData = [];
                message.metaData.push($root.Meta.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MetaData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MetaData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MetaData} MetaData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MetaData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MetaData message.
     * @function verify
     * @memberof MetaData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MetaData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.metaData != null && message.hasOwnProperty("metaData")) {
            if (!Array.isArray(message.metaData))
                return "metaData: array expected";
            for (var i = 0; i < message.metaData.length; ++i) {
                var error = $root.Meta.verify(message.metaData[i]);
                if (error)
                    return "metaData." + error;
            }
        }
        return null;
    };

    /**
     * Creates a MetaData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MetaData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MetaData} MetaData
     */
    MetaData.fromObject = function fromObject(object) {
        if (object instanceof $root.MetaData)
            return object;
        var message = new $root.MetaData();
        if (object.metaData) {
            if (!Array.isArray(object.metaData))
                throw TypeError(".MetaData.metaData: array expected");
            message.metaData = [];
            for (var i = 0; i < object.metaData.length; ++i) {
                if (typeof object.metaData[i] !== "object")
                    throw TypeError(".MetaData.metaData: object expected");
                message.metaData[i] = $root.Meta.fromObject(object.metaData[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a MetaData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MetaData
     * @static
     * @param {MetaData} message MetaData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MetaData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.metaData = [];
        if (message.metaData && message.metaData.length) {
            object.metaData = [];
            for (var j = 0; j < message.metaData.length; ++j)
                object.metaData[j] = $root.Meta.toObject(message.metaData[j], options);
        }
        return object;
    };

    /**
     * Converts this MetaData to JSON.
     * @function toJSON
     * @memberof MetaData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MetaData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MetaData;
})();

$root.Chat = (function() {

    /**
     * Properties of a Chat.
     * @exports IChat
     * @interface IChat
     * @property {Chat.ChatType|null} [chatType] Chat chatType
     * @property {number|null} [senderId] Chat senderId
     * @property {string|null} [message] Chat message
     * @property {IChatGlobal|null} [global] Chat global
     * @property {IChatPrivate|null} ["private"] Chat private
     */

    /**
     * Constructs a new Chat.
     * @exports Chat
     * @classdesc Represents a Chat.
     * @implements IChat
     * @constructor
     * @param {IChat=} [properties] Properties to set
     */
    function Chat(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Chat chatType.
     * @member {Chat.ChatType} chatType
     * @memberof Chat
     * @instance
     */
    Chat.prototype.chatType = 0;

    /**
     * Chat senderId.
     * @member {number} senderId
     * @memberof Chat
     * @instance
     */
    Chat.prototype.senderId = 0;

    /**
     * Chat message.
     * @member {string} message
     * @memberof Chat
     * @instance
     */
    Chat.prototype.message = "";

    /**
     * Chat global.
     * @member {IChatGlobal|null|undefined} global
     * @memberof Chat
     * @instance
     */
    Chat.prototype.global = null;

    /**
     * Chat private.
     * @member {IChatPrivate|null|undefined} private
     * @memberof Chat
     * @instance
     */
    Chat.prototype["private"] = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Chat messageType.
     * @member {"global"|"private"|undefined} messageType
     * @memberof Chat
     * @instance
     */
    Object.defineProperty(Chat.prototype, "messageType", {
        get: $util.oneOfGetter($oneOfFields = ["global", "private"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Chat instance using the specified properties.
     * @function create
     * @memberof Chat
     * @static
     * @param {IChat=} [properties] Properties to set
     * @returns {Chat} Chat instance
     */
    Chat.create = function create(properties) {
        return new Chat(properties);
    };

    /**
     * Encodes the specified Chat message. Does not implicitly {@link Chat.verify|verify} messages.
     * @function encode
     * @memberof Chat
     * @static
     * @param {IChat} message Chat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Chat.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.chatType != null && message.hasOwnProperty("chatType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chatType);
        if (message.senderId != null && message.hasOwnProperty("senderId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.senderId);
        if (message.message != null && message.hasOwnProperty("message"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
        if (message.global != null && message.hasOwnProperty("global"))
            $root.ChatGlobal.encode(message.global, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message["private"] != null && message.hasOwnProperty("private"))
            $root.ChatPrivate.encode(message["private"], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Chat message, length delimited. Does not implicitly {@link Chat.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Chat
     * @static
     * @param {IChat} message Chat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Chat.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Chat message from the specified reader or buffer.
     * @function decode
     * @memberof Chat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Chat} Chat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Chat.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Chat();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.chatType = reader.int32();
                break;
            case 2:
                message.senderId = reader.uint32();
                break;
            case 3:
                message.message = reader.string();
                break;
            case 4:
                message.global = $root.ChatGlobal.decode(reader, reader.uint32());
                break;
            case 5:
                message["private"] = $root.ChatPrivate.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Chat message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Chat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Chat} Chat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Chat.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Chat message.
     * @function verify
     * @memberof Chat
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Chat.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.chatType != null && message.hasOwnProperty("chatType"))
            switch (message.chatType) {
            default:
                return "chatType: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.senderId != null && message.hasOwnProperty("senderId"))
            if (!$util.isInteger(message.senderId))
                return "senderId: integer expected";
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        if (message.global != null && message.hasOwnProperty("global")) {
            properties.messageType = 1;
            {
                var error = $root.ChatGlobal.verify(message.global);
                if (error)
                    return "global." + error;
            }
        }
        if (message["private"] != null && message.hasOwnProperty("private")) {
            if (properties.messageType === 1)
                return "messageType: multiple values";
            properties.messageType = 1;
            {
                var error = $root.ChatPrivate.verify(message["private"]);
                if (error)
                    return "private." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Chat message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Chat
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Chat} Chat
     */
    Chat.fromObject = function fromObject(object) {
        if (object instanceof $root.Chat)
            return object;
        var message = new $root.Chat();
        switch (object.chatType) {
        case "GLOBAL":
        case 0:
            message.chatType = 0;
            break;
        case "PRIVATE":
        case 1:
            message.chatType = 1;
            break;
        }
        if (object.senderId != null)
            message.senderId = object.senderId >>> 0;
        if (object.message != null)
            message.message = String(object.message);
        if (object.global != null) {
            if (typeof object.global !== "object")
                throw TypeError(".Chat.global: object expected");
            message.global = $root.ChatGlobal.fromObject(object.global);
        }
        if (object["private"] != null) {
            if (typeof object["private"] !== "object")
                throw TypeError(".Chat.private: object expected");
            message["private"] = $root.ChatPrivate.fromObject(object["private"]);
        }
        return message;
    };

    /**
     * Creates a plain object from a Chat message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Chat
     * @static
     * @param {Chat} message Chat
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Chat.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.chatType = options.enums === String ? "GLOBAL" : 0;
            object.senderId = 0;
            object.message = "";
        }
        if (message.chatType != null && message.hasOwnProperty("chatType"))
            object.chatType = options.enums === String ? $root.Chat.ChatType[message.chatType] : message.chatType;
        if (message.senderId != null && message.hasOwnProperty("senderId"))
            object.senderId = message.senderId;
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        if (message.global != null && message.hasOwnProperty("global")) {
            object.global = $root.ChatGlobal.toObject(message.global, options);
            if (options.oneofs)
                object.messageType = "global";
        }
        if (message["private"] != null && message.hasOwnProperty("private")) {
            object["private"] = $root.ChatPrivate.toObject(message["private"], options);
            if (options.oneofs)
                object.messageType = "private";
        }
        return object;
    };

    /**
     * Converts this Chat to JSON.
     * @function toJSON
     * @memberof Chat
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Chat.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * ChatType enum.
     * @name Chat.ChatType
     * @enum {string}
     * @property {number} GLOBAL=0 GLOBAL value
     * @property {number} PRIVATE=1 PRIVATE value
     */
    Chat.ChatType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GLOBAL"] = 0;
        values[valuesById[1] = "PRIVATE"] = 1;
        return values;
    })();

    return Chat;
})();

$root.ChatGlobal = (function() {

    /**
     * Properties of a ChatGlobal.
     * @exports IChatGlobal
     * @interface IChatGlobal
     */

    /**
     * Constructs a new ChatGlobal.
     * @exports ChatGlobal
     * @classdesc Represents a ChatGlobal.
     * @implements IChatGlobal
     * @constructor
     * @param {IChatGlobal=} [properties] Properties to set
     */
    function ChatGlobal(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ChatGlobal instance using the specified properties.
     * @function create
     * @memberof ChatGlobal
     * @static
     * @param {IChatGlobal=} [properties] Properties to set
     * @returns {ChatGlobal} ChatGlobal instance
     */
    ChatGlobal.create = function create(properties) {
        return new ChatGlobal(properties);
    };

    /**
     * Encodes the specified ChatGlobal message. Does not implicitly {@link ChatGlobal.verify|verify} messages.
     * @function encode
     * @memberof ChatGlobal
     * @static
     * @param {IChatGlobal} message ChatGlobal message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatGlobal.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ChatGlobal message, length delimited. Does not implicitly {@link ChatGlobal.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChatGlobal
     * @static
     * @param {IChatGlobal} message ChatGlobal message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatGlobal.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChatGlobal message from the specified reader or buffer.
     * @function decode
     * @memberof ChatGlobal
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChatGlobal} ChatGlobal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatGlobal.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatGlobal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChatGlobal message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChatGlobal
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChatGlobal} ChatGlobal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatGlobal.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChatGlobal message.
     * @function verify
     * @memberof ChatGlobal
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChatGlobal.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a ChatGlobal message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChatGlobal
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChatGlobal} ChatGlobal
     */
    ChatGlobal.fromObject = function fromObject(object) {
        if (object instanceof $root.ChatGlobal)
            return object;
        return new $root.ChatGlobal();
    };

    /**
     * Creates a plain object from a ChatGlobal message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChatGlobal
     * @static
     * @param {ChatGlobal} message ChatGlobal
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChatGlobal.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ChatGlobal to JSON.
     * @function toJSON
     * @memberof ChatGlobal
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChatGlobal.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ChatGlobal;
})();

$root.ChatPrivate = (function() {

    /**
     * Properties of a ChatPrivate.
     * @exports IChatPrivate
     * @interface IChatPrivate
     * @property {number|null} [receiverId] ChatPrivate receiverId
     */

    /**
     * Constructs a new ChatPrivate.
     * @exports ChatPrivate
     * @classdesc Represents a ChatPrivate.
     * @implements IChatPrivate
     * @constructor
     * @param {IChatPrivate=} [properties] Properties to set
     */
    function ChatPrivate(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChatPrivate receiverId.
     * @member {number} receiverId
     * @memberof ChatPrivate
     * @instance
     */
    ChatPrivate.prototype.receiverId = 0;

    /**
     * Creates a new ChatPrivate instance using the specified properties.
     * @function create
     * @memberof ChatPrivate
     * @static
     * @param {IChatPrivate=} [properties] Properties to set
     * @returns {ChatPrivate} ChatPrivate instance
     */
    ChatPrivate.create = function create(properties) {
        return new ChatPrivate(properties);
    };

    /**
     * Encodes the specified ChatPrivate message. Does not implicitly {@link ChatPrivate.verify|verify} messages.
     * @function encode
     * @memberof ChatPrivate
     * @static
     * @param {IChatPrivate} message ChatPrivate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatPrivate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.receiverId != null && message.hasOwnProperty("receiverId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.receiverId);
        return writer;
    };

    /**
     * Encodes the specified ChatPrivate message, length delimited. Does not implicitly {@link ChatPrivate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChatPrivate
     * @static
     * @param {IChatPrivate} message ChatPrivate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatPrivate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChatPrivate message from the specified reader or buffer.
     * @function decode
     * @memberof ChatPrivate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChatPrivate} ChatPrivate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatPrivate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatPrivate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.receiverId = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChatPrivate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChatPrivate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChatPrivate} ChatPrivate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatPrivate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChatPrivate message.
     * @function verify
     * @memberof ChatPrivate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChatPrivate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.receiverId != null && message.hasOwnProperty("receiverId"))
            if (!$util.isInteger(message.receiverId))
                return "receiverId: integer expected";
        return null;
    };

    /**
     * Creates a ChatPrivate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChatPrivate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChatPrivate} ChatPrivate
     */
    ChatPrivate.fromObject = function fromObject(object) {
        if (object instanceof $root.ChatPrivate)
            return object;
        var message = new $root.ChatPrivate();
        if (object.receiverId != null)
            message.receiverId = object.receiverId >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a ChatPrivate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChatPrivate
     * @static
     * @param {ChatPrivate} message ChatPrivate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChatPrivate.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.receiverId = 0;
        if (message.receiverId != null && message.hasOwnProperty("receiverId"))
            object.receiverId = message.receiverId;
        return object;
    };

    /**
     * Converts this ChatPrivate to JSON.
     * @function toJSON
     * @memberof ChatPrivate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChatPrivate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ChatPrivate;
})();

/**
 * Compression enum.
 * @exports Compression
 * @enum {string}
 * @property {number} NONE=0 NONE value
 * @property {number} ZSTD=1 ZSTD value
 * @property {number} GZIP=2 GZIP value
 */
$root.Compression = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NONE"] = 0;
    values[valuesById[1] = "ZSTD"] = 1;
    values[valuesById[2] = "GZIP"] = 2;
    return values;
})();

module.exports = $root;