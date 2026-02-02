export interface NavItem {
  label: string
  href: string
}

export interface NavigationState {
  isOpen: boolean
  toggle: () => void
  close: () => void
}
