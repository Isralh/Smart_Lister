import styled from 'styled-components'

export const Container = styled.div`
width:100%;
display: ${props => props.viewFavorites ? 'block' : 'none'}

`
