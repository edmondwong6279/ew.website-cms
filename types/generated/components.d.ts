import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsAboutCard extends Schema.Component {
  collectionName: 'components_components_about_cards';
  info: {
    displayName: 'AboutItem';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    subtitle: Attribute.String;
    mediaUrl: Attribute.String;
  };
}

export interface ComponentsAboutGroup extends Schema.Component {
  collectionName: 'components_components_about_groups';
  info: {
    displayName: 'AboutGroup';
    icon: 'layer';
    description: '';
  };
  attributes: {
    groupTitle: Attribute.String;
    aboutItems: Attribute.Component<'components.about-card', true>;
  };
}

export interface ComponentsContactItem extends Schema.Component {
  collectionName: 'components_components_contact_items';
  info: {
    displayName: 'ContactItem';
    icon: 'message';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    linkText: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface ComponentsPortfolioItem extends Schema.Component {
  collectionName: 'components_components_portfolio_items';
  info: {
    displayName: 'PortfolioItem';
    icon: 'medium';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    repositoryUrl: Attribute.String;
    projectUrl: Attribute.String;
    mediaUrl: Attribute.String;
  };
}

export interface ComponentsSkillGroup extends Schema.Component {
  collectionName: 'components_components_skill_groups';
  info: {
    displayName: 'SkillGroup';
    icon: 'layer';
    description: '';
  };
  attributes: {
    groupName: Attribute.String;
    groupDescription: Attribute.Text;
    skills: Attribute.Component<'components.skill', true> & Attribute.Required;
  };
}

export interface ComponentsSkill extends Schema.Component {
  collectionName: 'components_components_skills';
  info: {
    displayName: 'Skill';
    icon: 'rocket';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    value: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 1;
        max: 5;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.about-card': ComponentsAboutCard;
      'components.about-group': ComponentsAboutGroup;
      'components.contact-item': ComponentsContactItem;
      'components.portfolio-item': ComponentsPortfolioItem;
      'components.skill-group': ComponentsSkillGroup;
      'components.skill': ComponentsSkill;
    }
  }
}
