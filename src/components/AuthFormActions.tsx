type AuthFormActionsProps = {
  primaryLabel: string;
  secondaryLabel: string;
  onSecondaryClick: () => void;
};

function AuthFormActions({
  primaryLabel,
  secondaryLabel,
  onSecondaryClick,
}: AuthFormActionsProps) {
  return (
    <>
      <button className="primary-button auth-submit" type="submit">
        {primaryLabel}
      </button>
      <button className="ghost-button auth-submit" type="button" onClick={onSecondaryClick}>
        {secondaryLabel}
      </button>
    </>
  );
}

export default AuthFormActions;
