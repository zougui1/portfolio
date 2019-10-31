export const flagTooltipTrans = (t, flagName) => (
  t('navbar:flag.tooltip', {
    language: t('glossary:language-code_to_fullname.' + flagName)
  })
);

export const flagAltTrans = (t, flagName) => (
  t('navbar:flag.alt', { language: flagName })
);
