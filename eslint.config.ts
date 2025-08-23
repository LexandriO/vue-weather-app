import { globalIgnores } from 'eslint/config';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  globalIgnores(['**/dist/**']),

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  {
    rules: {
      semi: 'warn',
      'comma-dangle': ['error', 'always-multiline'],
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/html-indent': [
        'error',
        'tab',
        {
          attribute: 1,
          baseIndent: 1,
          closeBracket: 0,
          alignAttributesVertically: true,
          ignores: [],
        },
      ],
      'vue/attributes-order': [
        'error',
        {
          order: [
            'CONDITIONALS',
            'LIST_RENDERING',
            'RENDER_MODIFIERS',
            'ATTR_STATIC',
            'GLOBAL',
            'DEFINITION',
            ['UNIQUE', 'SLOT'],
            'ATTR_DYNAMIC',
            'ATTR_SHORTHAND_BOOL',
            'TWO_WAY_BINDING',
            'OTHER_DIRECTIVES',
            'CONTENT',
            'EVENTS',
          ],
          alphabetical: false,
        },
      ],
    },
  }
);
