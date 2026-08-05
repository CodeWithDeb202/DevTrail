# DevTrail Settings & README Enhancement - TODO

## Backend
- [x] 1. Update `User.js` model - add theme, notification & privacy fields
- [x] 2. Update `profileController.js` - persist new fields in updateProfile
- [x] 3. Add `deleteAccount` endpoint in `authController.js`
- [x] 4. Add route in `authRoutes.js` for delete account
- [x] 5. Register route (authRoutes already mounted at /api/auth)

## Frontend
- [x] 6. Make `AppearanceTab.jsx` functional (theme switcher)
- [x] 7. Make `NotificationTab.jsx` functional (persist preferences)
- [x] 8. Complete `PrivacyTab.jsx` (enable all toggles)
- [x] 9. Make `DeleteAccountTab.jsx` functional (delete account)
- [x] 9b. Add `settingsService.js` for settings API calls
- [x] 9c. Add icons to Settings `Sidebar.jsx`

## Documentation
- [x] 10. Rewrite `README.md` comprehensively

## Verification
- [x] 11. Run frontend build to verify (all 11 routes generated ✓)
- [x] 12. Backend syntax check passed (all controllers, models, routes OK ✓)
- [x] 13. Deployment readiness check complete ✅
- [ ] 14. Commit & push changes

## Theme System Fix
- [x] 15. Create `ThemeContext.jsx` - global theme state with localStorage persistence
- [x] 16. Wrap app with `ThemeProvider` in `layout.jsx`
- [x] 17. Add light theme CSS overrides in `globals.css`
- [x] 18. Update `AppearanceTab.jsx` to use `useTheme` context (instant global switching)
- [x] 19. Rebuild frontend - all 11 routes compiled successfully ✓
