import { Injectable } from '@nestjs/common';
import { Client, Collection, Guild, Role, Snowflake } from 'discord.js';

@Injectable()
export class DiscordProxyService {
  constructor(private readonly discordClient: Client) {}

  /**
   * Retrieves the roles for a given Discord server.
   * @returns A Promise that resolves to an array of Role objects.
   * @throws Error if the guild is not found or roles cannot be fetched.
   */
  public async getServerRoles(): Promise<Role[]> {
    const guild: Guild | undefined = this.discordClient.guilds.cache.get(
      process.env.GUILD_ID,
    );

    if (!guild) {
      throw new Error(`Guild with ID ${process.env.GUILD_ID} not found.`);
    }

    try {
      const roles: Collection<Snowflake, Role> = await guild.roles.fetch();
      return Array.from(roles.values());
    } catch (error) {
      throw new Error(
        `Failed to fetch roles for guild ${process.env.GUILD_ID}: ${error.message}`,
      );
    }
  }

  /**
   * Adds a role to a set of participants in the Discord server.
   * @param roleId The ID of the role to add.
   * @param participantIds An array of participant user IDs.
   * @returns A Promise that resolves to an object containing successful and failed operations.
   * @throws Error if the guild or role is not found.
   */
  public async addRoleToParticipants(
    roleId: Snowflake,
    participantIds: Snowflake[],
  ): Promise<{ successful: Snowflake[]; failed: Snowflake[] }> {
    const guild = this.discordClient.guilds.cache.get(process.env.GUILD_ID);
    if (!guild) {
      throw new Error(`Guild with ID ${process.env.GUILD_ID} not found.`);
    }

    const role = await guild.roles.fetch(roleId);
    if (!role) {
      throw new Error(`Role with ID ${roleId} not found.`);
    }

    const results = { successful: [], failed: [] };

    for (const participantId of participantIds) {
      try {
        const member = await guild.members.fetch(participantId);
        await member.roles.add(role);
        results.successful.push(participantId);
      } catch (error) {
        results.failed.push(participantId);
      }
    }

    return results;
  }
}
