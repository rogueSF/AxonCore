import AHandler from '../../../Core/Event/AHandler';

class ChannelPinsUpdateHandler extends AHandler {
    handle(channel) {
        return channel.guild ? channel.guild.id : null;
    }
}

export default ChannelPinsUpdateHandler;
