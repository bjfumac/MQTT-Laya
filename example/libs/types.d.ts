declare module mqtt{
  type QoS = 0 | 1 | 2
  type PacketCmd = 'connack' |
    'connect' |
    'disconnect' |
    'pingreq' |
    'pingresp' |
    'puback' |
    'pubcomp' |
    'publish' |
    'pubrel' |
    'pubrec' |
    'suback' |
    'subscribe' |
    'unsuback' |
    'unsubscribe'
  interface IPacket {
    cmd: PacketCmd
    messageId?: number
    length?: number
  }
  interface IConnectPacket extends IPacket {
    cmd: 'connect'
    clientId: string
    protocolVersion?: 4 | 3
    protocolId?: 'MQTT' | 'MQIsdp'
    clean?: boolean
    keepalive?: number
    username?: string
    password?: Buffer
    will?: {
      topic: string
      payload: Buffer
      qos?: QoS
      retain?: boolean
    }
  }
  interface IPublishPacket extends IPacket {
    cmd: 'publish'
    qos: QoS
    dup: boolean
    retain: boolean
    topic: string
    payload: string | Buffer
  }
  interface IConnackPacket extends IPacket {
    cmd: 'connack'
    returnCode: number
    sessionPresent: boolean
  }
  interface ISubscribePacket extends IPacket {
    cmd: 'subscribe'
    subscriptions: Array<{
      topic: string
      qos: QoS
    }>
  }
  interface ISubackPacket extends IPacket {
    cmd: 'suback'
    granted: number[]
  }
  interface IUnsubscribePacket extends IPacket {
    cmd: 'unsubscribe'
    unsubscriptions: string[]
  }
  interface IUnsubackPacket extends IPacket {
    cmd: 'unsuback'
  }
  interface IPubackPacket extends IPacket {
    cmd: 'puback'
  }
  interface IPubcompPacket extends IPacket {
    cmd: 'pubcomp'
  }
  interface IPubrelPacket extends IPacket {
    cmd: 'pubrel'
  }
  interface IPubrecPacket extends IPacket {
    cmd: 'pubrec'
  }
  interface IPingreqPacket extends IPacket {
    cmd: 'pingreq'
  }
  interface IPingrespPacket extends IPacket {
    cmd: 'pingresp'
  }
  interface IDisconnectPacket extends IPacket {
    cmd: 'disconnect'
  }

  type Packet = IConnectPacket |
    IPublishPacket |
    IConnackPacket |
    ISubscribePacket |
    ISubackPacket |
    IUnsubscribePacket |
    IUnsubackPacket |
    IPubackPacket |
    IPubcompPacket |
    IPubrelPacket |
    IPingreqPacket |
    IPingrespPacket |
    IDisconnectPacket |
    IPubrecPacket
}